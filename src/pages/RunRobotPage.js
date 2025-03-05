import React from "react";
import { useNavigate } from "react-router-dom";
import "./RunRobotPage.css"; // Import CSS
import { Box, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home"; // Import Home Icon from Material-UI

const RunRobotPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Home Button */}
            <IconButton className="home-icon" onClick={() => navigate("/")}>
                <HomeIcon style={{ fontSize: 40, color: "#fff" }} />
            </IconButton>

            {/* Main UI */}
            <Box className="run-robot-container">
                {/* Title */}
                <Typography variant="h2" className="title">
                    Robot Control Panel
                </Typography>

                {/* Button Container */}
                <Box className="button-grid">
                    <button className="robot-button home" onClick={() => console.log("Navigating to Home/Charging Station")}>
                        🏠 Back to Home
                    </button>

                    <button className="robot-button lidar" onClick={() => console.log("Opening LiDAR Stream")}>
                        📡 LiDAR Stream
                    </button>

                    <button className="robot-button move" onClick={() => navigate("/run-robot/move-to-destination")}>
                        📍 Move to Destination
                    </button>

                    <button className="robot-button guide" onClick={() => navigate("/run-robot/teleoperation")}>
                        🏭 Teleoperation
                    </button>
                </Box>
            </Box>
        </div>
    );
};

export default RunRobotPage;
