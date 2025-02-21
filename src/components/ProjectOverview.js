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
            <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.1rem" }}>
                Felix is a cutting-edge service robot designed to assist in various environments, from hospitals to offices. 
                Our robot leverages advanced AI algorithms for human activity recognition and real-time navigation, 
                ensuring seamless interaction and efficient task execution. With a focus on social awareness, FulBot 
                is redefining the future of human-robot collaboration.
            </Typography>
        </Box>
    );
};

export default ProjectOverview;