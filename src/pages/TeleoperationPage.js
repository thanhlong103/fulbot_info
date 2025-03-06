import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Divider, IconButton } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ROSLIB from "roslib";
import "./TeleoperationPage.css";

const TeleoperationPage = () => {
    const [robotStatus, setRobotStatus] = useState({ battery: 0, state: "DISCONNECTED" });
    const [ros, setRos] = useState(null);
    const [twist, setTwist] = useState(null);
    const [activeKeys, setActiveKeys] = useState({
        w: false,
        s: false,
        a: false,
        d: false,
        x: false,
    });
    const [linearVelocity, setLinearVelocity] = useState(0.0);
    const [angularVelocity, setAngularVelocity] = useState(0.0);
    const [velocityLog, setVelocityLog] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const rosConnection = new ROSLIB.Ros({
            url: "ws://10.212.17.79:9090", // ROS2 on the same machine
        });

        rosConnection.on("connection", () => {
            console.log("Connected to ROS2 bridge");
            setRobotStatus((prev) => ({ ...prev, state: "CONNECTED" }));
            const twistTopic = new ROSLIB.Topic({
                ros: rosConnection,
                name: "/cmd_vel",
                messageType: "geometry_msgs/Twist",
            });
            setRos(rosConnection);
            setTwist(twistTopic);
        });

        rosConnection.on("error", (error) => {
            console.error("ROS2 connection error:", error);
            setRobotStatus((prev) => ({ ...prev, state: "ERROR" }));
        });

        rosConnection.on("close", () => {
            console.log("Disconnected from ROS2 bridge");
            setRobotStatus((prev) => ({ ...prev, state: "DISCONNECTED" }));
        });

        return () => rosConnection.close();
    }, []);

    // Function to Publish Twist Messages and Update Log
    const publishTwist = (linearX, angularZ, key, action) => {
        if (!twist) return;

        const msg = new ROSLIB.Message({
            linear: { x: linearX, y: 0.0, z: 0.0 },
            angular: { x: 0.0, y: 0.0, z: angularZ },
        });
        twist.publish(msg);

        if (key) {
            setActiveKeys((prev) => ({ ...prev, [key]: true }));
            setLinearVelocity(linearX);
            setAngularVelocity(angularZ);
            setVelocityLog((prev) => [
                `[${new Date().toLocaleTimeString()}] ${action}: Linear=${linearX.toFixed(2)} m/s, Angular=${angularZ.toFixed(2)} rad/s`,
                ...prev.slice(0, 4), // Keep last 5 entries
            ]);
        }
    };

    // Function to Stop Robot and Reset Velocities
    const stopRobot = (key) => {
        if (!twist) return;

        const stopMsg = new ROSLIB.Message({
            linear: { x: 0.0, y: 0.0, z: 0.0 },
            angular: { x: 0.0, y: 0.0, z: 0.0 },
        });
        twist.publish(stopMsg);

        if (key) {
            setActiveKeys((prev) => ({ ...prev, [key]: false }));
            setLinearVelocity(0.0);
            setAngularVelocity(0.0);
            setVelocityLog((prev) => [
                `[${new Date().toLocaleTimeString()}] Stopped: Linear=0.00 m/s, Angular=0.00 rad/s`,
                ...prev.slice(0, 4),
            ]);
        }
    };

    // Handle Key Presses
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();
            if (!["w", "s", "a", "d", "x"].includes(key)) return;

            switch (key) {
                case "w":
                    publishTwist(linearVelocity + 0.01, angularVelocity, "w", "Increased Linear");
                    break;
                case "x":
                    publishTwist(linearVelocity - 0.01, angularVelocity, "x", "Decreased Linear");
                    break;
                case "a":
                    publishTwist(linearVelocity, angularVelocity + 0.1, "a", "Increased Angular");
                    break;
                case "d":
                    publishTwist(linearVelocity, angularVelocity - 0.1, "d", "Decreased Angular");
                    break;
                case "s":
                    stopRobot("s");
                    break;
                default:
                    return;
            }
        };

        const handleKeyUp = (event) => {
            const key = event.key.toLowerCase();
            if (!["w", "s", "a", "d", "x"].includes(key)) return;
            setActiveKeys((prev) => ({ ...prev, [key]: false }));
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [twist, linearVelocity, angularVelocity]);

    // Handle Button Clicks/Touches
    const handleButtonPress = (action) => {
        switch (action) {
            case "w":
                publishTwist(linearVelocity + 0.01, angularVelocity, "w", "Increased Linear");
                break;
            case "x":
                publishTwist(linearVelocity - 0.01, angularVelocity, "x", "Decreased Linear");
                break;
            case "a":
                publishTwist(linearVelocity, angularVelocity + 0.1, "a", "Increased Angular");
                break;
            case "d":
                publishTwist(linearVelocity, angularVelocity - 0.1, "d", "Decreased Angular");
                break;
            case "s":
                stopRobot("s");
                break;
            default:
                return;
        }
    };

    const handleButtonRelease = (key) => {
        setActiveKeys((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <Box className="container">
            {/* Sidebar */}
            <Paper className="sidebar">
                <Box className="sidebar-header">
                    <Typography variant="h5" className="sidebar-title">
                        <Settings fontSize="inherit" /> TELEOP
                    </Typography>
                    <IconButton onClick={() => navigate("/run-robot")}>
                        <Home />
                    </IconButton>
                </Box>

                <Divider className="divider" />

                <Box className="status-section">
                    <Typography variant="subtitle1" className="status-title">
                        STATUS
                    </Typography>
                    <Typography variant="body2" className="status-text">
                        {robotStatus.state}
                    </Typography>
                    <Typography variant="body2" className="status-text">
                        Battery: {robotStatus.battery}%
                    </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="velocity-log">
                    <Typography variant="subtitle1" className="status-title">
                        VELOCITY LOG
                    </Typography>
                    <Box className="log-list">
                        {velocityLog.length > 0 ? (
                            velocityLog.map((entry, index) => (
                                <Typography key={index} variant="body2" className="log-entry">
                                    {entry}
                                </Typography>
                            ))
                        ) : (
                            <Typography variant="body2" className="log-entry">
                                No actions yet
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Paper>

            {/* Main Control Area */}
            <Box className="control-area">
                <Typography variant="h4" className="control-title">
                    ROBOT TELEOPERATION
                </Typography>

                <Box className="visualization-container">
                    <Box className="gauge">
                        <Typography variant="body1" className="gauge-title">
                            Linear Velocity (m/s)
                        </Typography>
                        <Box className="speedometer">
                            <Box
                                className="needle"
                                style={{
                                    transform: `rotate(${(linearVelocity / 0.1) * 135 - 135}deg)`, // Scaled to ±0.1 m/s
                                }}
                            />
                        </Box>
                        <Typography variant="body2" className="gauge-value">
                            {linearVelocity.toFixed(2)}
                        </Typography>
                    </Box>

                    <Box className="gauge">
                        <Typography variant="body1" className="gauge-title">
                            Angular Velocity (rad/s)
                        </Typography>
                        <Box className="compass">
                            <Box
                                className="needle"
                                style={{
                                    transform: `rotate(${(angularVelocity / 1.0) * 180}deg)`, // Scaled to ±1.0 rad/s
                                }}
                            />
                        </Box>
                        <Typography variant="body2" className="gauge-value">
                            {angularVelocity.toFixed(2)}
                        </Typography>
                    </Box>
                </Box>

                <Box className="keypad">
                    <Box className="key-row">
                        <Box
                            className={`key ${activeKeys.w ? "active" : ""}`}
                            onTouchStart={() => handleButtonPress("w")}
                            onTouchEnd={() => handleButtonRelease("w")}
                            onMouseDown={() => handleButtonPress("w")}
                            onMouseUp={() => handleButtonRelease("w")}
                            onMouseLeave={() => handleButtonRelease("w")}
                        >
                            W
                        </Box>
                    </Box>
                    <Box className="key-row">
                        <Box
                            className={`key ${activeKeys.a ? "active" : ""}`}
                            onTouchStart={() => handleButtonPress("a")}
                            onTouchEnd={() => handleButtonRelease("a")}
                            onMouseDown={() => handleButtonPress("a")}
                            onMouseUp={() => handleButtonRelease("a")}
                            onMouseLeave={() => handleButtonRelease("a")}
                        >
                            A
                        </Box>
                        <Box
                            className={`key stop ${activeKeys.s ? "active" : ""}`}
                            onTouchStart={() => handleButtonPress("s")}
                            onTouchEnd={() => handleButtonRelease("s")}
                            onMouseDown={() => handleButtonPress("s")}
                            onMouseUp={() => handleButtonRelease("s")}
                            onMouseLeave={() => handleButtonRelease("s")}
                        >
                            S
                        </Box>
                        <Box
                            className={`key ${activeKeys.d ? "active" : ""}`}
                            onTouchStart={() => handleButtonPress("d")}
                            onTouchEnd={() => handleButtonRelease("d")}
                            onMouseDown={() => handleButtonPress("d")}
                            onMouseUp={() => handleButtonRelease("d")}
                            onMouseLeave={() => handleButtonRelease("d")}
                        >
                            D
                        </Box>
                    </Box>
                    <Box className="key-row">
                        <Box
                            className={`key ${activeKeys.x ? "active" : ""}`}
                            onTouchStart={() => handleButtonPress("x")}
                            onTouchEnd={() => handleButtonRelease("x")}
                            onMouseDown={() => handleButtonPress("x")}
                            onMouseUp={() => handleButtonRelease("x")}
                            onMouseLeave={() => handleButtonRelease("x")}
                        >
                            X
                        </Box>
                    </Box>
                </Box>

                <Box className="instructions">
                    <Typography variant="body1" className="instruction-text">
                        <strong>W</strong>: +0.01 m/s • <strong>X</strong>: -0.01 m/s •{" "}
                        <strong>A</strong>: +0.1 rad/s • <strong>D</strong>: -0.1 rad/s •{" "}
                        <strong>S</strong>: Stop
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TeleoperationPage;