// DemonstrationPage.js
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const DemonstrationPage = () => {
    const [demos, setDemos] = useState([]);

    useEffect(() => {
        fetch("/data/demoVideo.json")
            .then(response => response.json())
            .then(data => setDemos(data))
            .catch(error => console.error("Error loading demo data:", error));
    }, []);

    return (
        <Box sx={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #1a1f2c 0%, #0a0e17 100%)",
            color: "white",
            padding: "80px 20px",
            marginTop: "4%"
        }}>
            <Typography variant="h2" sx={{
                textAlign: "center",
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
                Demonstrations
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                {demos.map((demo, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box sx={{
                                background: "linear-gradient(45deg, #0072ff33, #ffffff0a)",
                                border: "1px solid #ffffff15",
                                borderRadius: "15px",
                                padding: "30px",
                                height: "100%"
                            }}>
                                <video controls style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    marginBottom: "20px"
                                }}>
                                    <source src={demo.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                                    {demo.title}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {demo.description}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {demo.features.map((feature, i) => (
                                        <div key={i}>✅ {feature}</div>
                                    ))}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DemonstrationPage;
