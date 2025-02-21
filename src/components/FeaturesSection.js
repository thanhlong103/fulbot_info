// FeaturesSection.js
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SensorsIcon from "@mui/icons-material/Sensors";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MemoryIcon from "@mui/icons-material/Memory";

const FeaturesSection = () => {
    return (
        <Box sx={{ 
            padding: "80px 20px",
            background: "linear-gradient(180deg, #0a0e17 0%, #1a1f2c 100%)",
            color: "white",
            textAlign: "center"
        }}>
            <Typography variant="h3" sx={{ 
                mb: 8,
                fontWeight: "bold",
                "&::after": {
                    content: '""',
                    display: "block",
                    width: "60px",
                    height: "4px",
                    background: "#0072ff",
                    margin: "20px auto"
                }
            }}>
                Solix's Key Features
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {[
                    {
                        icon: <SensorsIcon sx={{ fontSize: 50 }} />,
                        title: "AI-Powered Perception",
                        content: "Utilizing MoveNet for pose estimation and CNN+LSTM for human activity recognition."
                    },
                    {
                        icon: <TravelExploreIcon sx={{ fontSize: 50 }} />,
                        title: "Navigation & Sensing",
                        content: "Equipped with ROS2 Navigation2, LiDAR, and RGB-D Cameras for real-time path planning."
                    },
                    {
                        icon: <MemoryIcon sx={{ fontSize: 50 }} />,
                        title: "Jetson Orin NX Computing",
                        content: "Efficient edge computing with NVIDIA Jetson Orin NX for fast AI inference."
                    }
                ].map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ 
                                background: "linear-gradient(45deg, #0072ff33, #ffffff0a)",
                                border: "1px solid #ffffff15",
                                borderRadius: "15px",
                                padding: "40px 20px",
                                minHeight: "250px",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-10px)"
                                }
                            }}>
                                <Box sx={{ 
                                    width: "80px",
                                    height: "80px",
                                    background: "#0072ff33",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 30px"
                                }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {feature.content}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;