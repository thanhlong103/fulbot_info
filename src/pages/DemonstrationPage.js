// DemonstrationPage.js
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const DemonstrationPage = () => {
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
                Live Demonstrations
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
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
                            <video 
                                controls 
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    marginBottom: "20px"
                                }}
                            >
                                <source src="/demo-video.mp4" type="video/mp4" />
                            </video>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                                Hospital Navigation Demo
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                Real-world testing in hospital environment showing dynamic obstacle avoidance
                                and human-aware navigation.
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
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
                            <div style={{
                                position: "relative",
                                paddingBottom: "56.25%", // 16:9
                                height: 0,
                                marginBottom: "20px"
                            }}>
                                <iframe
                                    title="Demo"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "10px"
                                    }}
                                    src="https://www.youtube.com/embed/demo"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                                Technical Deep Dive
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                Detailed explanation of our motion planning framework and sensor fusion approach.
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: "center", mt: 8 }}>
                <Button 
                    variant="contained" 
                    size="large"
                    sx={{
                        background: "linear-gradient(45deg, #0072ff, #00c6ff)",
                        fontSize: "1.2rem",
                        px: 6,
                        py: 1.5,
                        borderRadius: "50px",
                        textTransform: "none"
                    }}
                >
                    View All Demos
                </Button>
            </Box>
        </Box>
    );
};

export default DemonstrationPage;