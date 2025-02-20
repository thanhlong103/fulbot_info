import React, { useState, useRef, useEffect } from "react";
import { Button, Box, Typography, Paper, Divider, IconButton, LinearProgress } from "@mui/material";
import { ZoomIn, ZoomOut, GpsFixed, History, Settings, Home } from "@mui/icons-material";
import MapImage from "../images/sim_map.png";
import { useNavigate } from "react-router-dom";
import "./MoveToDestination.css";

const MAP_CONFIG = {
    resolution: 0.05,
    origin: [-2.92, -2.72],
    mapWidth: 800,
    mapHeight: 500,
};

const MoveToDestination = () => {
    const [goal, setGoal] = useState(null);
    const [scale, setScale] = useState(1);
    const [panning, setPanning] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [goalHistory, setGoalHistory] = useState([]);
    const [robotStatus, setRobotStatus] = useState({ battery: 0, state: "DISCONNECTED" });
    const mapRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedHistory = localStorage.getItem("goalHistory");
        if (savedHistory) setGoalHistory(JSON.parse(savedHistory));
    }, []);

    const handleMapClick = (event) => {
        if (!mapRef.current) return;

        const img = mapRef.current.getBoundingClientRect();

        // Correct the click position (accounting for zoom and panning)
        const clickX = (event.clientX - img.left - offsetX) / scale;
        const clickY = (event.clientY - img.top - offsetY) / scale;

        // Convert from image pixels to world coordinates
        const worldX = MAP_CONFIG.origin[0] + clickX * MAP_CONFIG.resolution;
        const worldY = MAP_CONFIG.origin[1] + (MAP_CONFIG.mapHeight - clickY) * MAP_CONFIG.resolution;

        setGoal({ x: parseFloat(worldX.toFixed(2)), y: parseFloat(worldY.toFixed(2)) });
    };

    const handleZoom = (direction, event = null) => {
        const zoomFactor = direction === "in" ? 1.2 : 1 / 1.2;
        const newScale = Math.min(3, Math.max(0.5, scale * zoomFactor));

        if (event) {
            // Keep the zoom centered around the mouse position
            const img = mapRef.current.getBoundingClientRect();
            const mouseX = event.clientX - img.left;
            const mouseY = event.clientY - img.top;

            setOffsetX((prevX) => (mouseX - prevX) * (newScale / scale) + prevX);
            setOffsetY((prevY) => (mouseY - prevY) * (newScale / scale) + prevY);
        }

        setScale(newScale);
    };

    const handleMouseDown = (e) => {
        setPanning(true);
        setStartX(e.clientX - offsetX);
        setStartY(e.clientY - offsetY);
    };

    const handleMouseMove = (e) => {
        if (panning) {
            setOffsetX(e.clientX - startX);
            setOffsetY(e.clientY - startY);
        }
    };

    const handleMouseUp = () => setPanning(false);

    const sendGoal = async () => {
        if (!goal) return;

        try {
            const response = await fetch("http://localhost:5000/api/send_goal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(goal),
            });

            if (!response.ok) throw new Error("Failed to send goal");

            setRobotStatus((prev) => ({ ...prev, state: "Navigating" }));
            setGoalHistory((prev) => [...prev.slice(-3), goal]);
            localStorage.setItem("goalHistory", JSON.stringify(goalHistory));
            alert(`Goal sent: X=${goal.x}, Y=${goal.y}`);
        } catch (error) {
            alert("Error sending goal: " + error.message);
        }
    };

    return (
        <Box className="container">
            {/* Control Panel */}
            <Paper className="control-panel">
                <Box className="panel-header">
                    <Typography variant="h5" className="panel-title">
                        <Settings fontSize="inherit" /> NAVIGATION CONTROL
                    </Typography>
                    <IconButton onClick={() => navigate("/run-robot")}>
                        <Home />
                    </IconButton>
                </Box>

                <Divider className="divider" />

                <Box className="status-section">
                    <Typography variant="subtitle1" className="status-title">
                        <GpsFixed /> ROBOT STATUS
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={robotStatus.battery}
                        className="battery-bar"
                    />
                    <Typography variant="body2" className="status-text">
                        {robotStatus.state} • {robotStatus.battery}% POWER
                    </Typography>
                </Box>

                <Divider className="divider" />

                <Box className="goal-section">
                    <Typography variant="subtitle1" className="section-title">
                        <History /> GOAL HISTORY
                    </Typography>
                    <Box className="history-list">
                        {goalHistory.map((g, i) => (
                            <Paper key={i} className="history-item">
                                [{i+1}] X: {g.x}, Y: {g.y}
                            </Paper>
                        ))}
                    </Box>
                </Box>

                <Box className="current-goal">
                    {goal ? `Selected: X=${goal.x}, Y=${goal.y}` : "Click map to select destination"}
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={sendGoal}
                    className="send-button"
                    disabled={!goal}
                >
                    SEND NAVIGATION GOAL
                </Button>
            </Paper>

            {/* Map Section */}
            <Box
                className="map-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {/* Toolbar for Zooming */}
                <Box className="map-toolbar">
                    <IconButton onClick={() => handleZoom('in')}>
                        <ZoomIn />
                    </IconButton>
                    <IconButton onClick={() => handleZoom('out')}>
                        <ZoomOut />
                    </IconButton>
                    <Typography variant="caption" className="zoom-level">
                        {Math.round(scale * 100)}%
                    </Typography>
                </Box>

                {/* Zoomable & Pannable Map */}
                <Box
                    className="map-wrapper"
                    ref={mapRef}
                    style={{
                        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                        transformOrigin: "top left",
                    }}
                >
                    <img
                        src={MapImage}
                        alt="Map"
                        width={MAP_CONFIG.mapWidth}
                        height={MAP_CONFIG.mapHeight}
                        onClick={handleMapClick}
                        className="map-image"
                    />

                    {/* Goal Marker (Fixed Positioning) */}
                    {goal && (
                        <div
                            className="goal-marker"
                            style={{
                                left: `${((goal.x - MAP_CONFIG.origin[0]) / MAP_CONFIG.resolution) * scale + offsetX}px`,
                                top: `${(MAP_CONFIG.mapHeight - (goal.y - MAP_CONFIG.origin[1]) / MAP_CONFIG.resolution) * scale + offsetY}px`,
                                transform: `scale(${1 / scale})`, // Prevents marker distortion
                            }}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default MoveToDestination;