// ProjectOverview.js
import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";

const ProjectOverview = () => {
    return (
        <Box sx={{ 
            padding: "80px 20px",
            background: "linear-gradient(180deg, #1a1f2c 0%, #0a0e17 100%)",
            color: "white",
            textAlign: "center"
        }}>
            <Typography variant="h3" sx={{ 
                mb: 4,
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
                Our Team Overview
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "1200px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.4rem" }}>
                FulBot is a student-led robotics research group at Fulbright University Vietnam, exploring human-robot interaction and autonomous navigation in dynamic environments. Under Ph.D. supervision, we leverage computer vision, deep learning, and motion planning to develop intelligent robotic systems. 
                Beyond research, we’re building a thriving robotics community, fostering innovation, and shaping the future of HRI.
            </Typography>
        </Box>
    );
};

export default ProjectOverview;