import React, { useState } from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import MapImage from "./sim_map.png";
import { useNavigate } from "react-router-dom";
import "./MoveToDestination.css"; // Import CSS

const MAP_CONFIG = {
    resolution: 0.05, // meters per pixel
    origin: [-2.92, -2.72], // map origin (x, y) in meters
    mapWidth: 800, // Increased map size
    mapHeight: 500,
};

const SendNavGoal = () => {
    const [goal, setGoal] = useState(null);
    const navigate = useNavigate();

    const handleMapClick = (event) => {
        const img = event.target.getBoundingClientRect();
        const clickX = event.clientX - img.left;
        const clickY = event.clientY - img.top;

        // Convert pixel coordinates to world coordinates
        const worldX = MAP_CONFIG.origin[0] + clickX * MAP_CONFIG.resolution;
        const worldY = MAP_CONFIG.origin[1] + (MAP_CONFIG.mapHeight - clickY) * MAP_CONFIG.resolution;

        setGoal({ x: worldX.toFixed(2), y: worldY.toFixed(2) }); // Round for clarity
    };

    const sendGoal = async () => {
        if (!goal) return alert("Please select a goal on the map!");

        try {
            const response = await fetch("http://localhost:5000/api/send_goal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(goal),
            });

            const data = await response.json();
            if (response.ok) {
                alert(`Goal sent successfully: X=${goal.x}, Y=${goal.y}`);
            } else {
                alert("Failed to send goal: " + data.error);
            }
        } catch (error) {
            console.error("Error sending goal:", error);
            alert("Failed to send goal");
        }
    };

    return (
        <Box className="container">
            {/* Map & Goal Selection */}
            <Box className="map-container">
                <Typography variant="h4" className="title">
                    🗺️ Select Destination on Map
                </Typography>
                <div className="map-wrapper">
                    <img
                        src={MapImage}
                        alt="Map"
                        width={MAP_CONFIG.mapWidth}
                        height={MAP_CONFIG.mapHeight}
                        onClick={handleMapClick}
                        className="map-image"
                    />
                    {goal && (
                        <div
                            className="goal-marker"
                            style={{
                                left: `${(goal.x - MAP_CONFIG.origin[0]) / MAP_CONFIG.resolution}px`,
                                top: `${MAP_CONFIG.mapHeight - (goal.y - MAP_CONFIG.origin[1]) / MAP_CONFIG.resolution}px`,
                            }}
                        />
                    )}
                </div>
            </Box>

            {/* Information & Controls */}
            <Paper elevation={6} className="info-panel">
                <Typography variant="h5" className="panel-title">📡 Navigation Panel</Typography>
                <Typography variant="body1" className="info-text">
                    {goal ? `📍 Selected Goal: X=${goal.x}, Y=${goal.y}` : "Click on the map to set a goal."}
                </Typography>
                <Typography variant="body1" className="info-text">🚗 Robot Status: Ready</Typography>
                <Box className="button-group">
                    <Button variant="contained" color="success" onClick={sendGoal} className="button">
                        ✅ Send Goal
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate("/")} className="button">
                        ⬅️ Back to Home
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default SendNavGoal;
