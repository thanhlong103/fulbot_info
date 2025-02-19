// src/components/SystemArchitecture.js
import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { MotionBox } from "./MotionBox";
import SensorsIcon from "@mui/icons-material/Sensors";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MemoryIcon from "@mui/icons-material/Memory";

const SystemArchitecture = () => {
    return (
        <Box sx={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
            {/* Section Title */}
            <MotionBox>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    🔧 System Architecture
                </Typography>
            </MotionBox>

            {/* Grid Layout for Features */}
            <Grid container spacing={4} justifyContent="center">
                {/* AI-Powered Perception */}
                <Grid item xs={12} sm={6} md={4}>
                    <MotionBox>
                        <Card sx={{ height: "100%", boxShadow: 3 }}>
                            <CardContent>
                                <SensorsIcon sx={{ fontSize: 50, color: "#007bff" }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>
                                    AI-Powered Perception
                                </Typography>
                                <Typography variant="body2" mt={1}>
                                    Utilizing <strong>MoveNet</strong> for pose estimation and <strong>LSTM</strong> for human activity recognition.
                                </Typography>
                            </CardContent>
                        </Card>
                    </MotionBox>
                </Grid>

                {/* Navigation & Sensing */}
                <Grid item xs={12} sm={6} md={4}>
                    <MotionBox>
                        <Card sx={{ height: "100%", boxShadow: 3 }}>
                            <CardContent>
                                <TravelExploreIcon sx={{ fontSize: 50, color: "#007bff" }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>
                                    Navigation & Sensing
                                </Typography>
                                <Typography variant="body2" mt={1}>
                                    Equipped with <strong>ROS2 Navigation2</strong>, <strong>LiDAR</strong>, and <strong>RGB-D Cameras</strong> for real-time path planning.
                                </Typography>
                            </CardContent>
                        </Card>
                    </MotionBox>
                </Grid>

                {/* Jetson Orin NX Computing */}
                <Grid item xs={12} sm={6} md={4}>
                    <MotionBox>
                        <Card sx={{ height: "100%", boxShadow: 3 }}>
                            <CardContent>
                                <MemoryIcon sx={{ fontSize: 50, color: "#007bff" }} />
                                <Typography variant="h6" fontWeight="bold" mt={2}>
                                    Jetson Orin NX Computing
                                </Typography>
                                <Typography variant="body2" mt={1}>
                                    Efficient edge computing with <strong>NVIDIA Jetson Orin NX</strong> for fast AI inference.
                                </Typography>
                            </CardContent>
                        </Card>
                    </MotionBox>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SystemArchitecture;
