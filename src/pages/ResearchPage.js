import React from "react";
import { Box, Typography, Grid, Paper, Link, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaProjectDiagram, FaSearch } from "react-icons/fa";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ResearchVisualization from "../components/ResearchVisualization";
import "./ResearchPage.css";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const ResearchPage = () => {
    const techStack = ["ROS2", "TensorFlow", "TensorRT", "OpenCV", "Gazebo", "Docker"];
    return (
        <Box sx={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #0a0e17 0%, #1a1f2c 100%)",
            color: "white",
            padding: "80px 20px",
            marginTop: "7vh"
        }}>
            {/* Research Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", marginBottom: "40px" }}
            >
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    🚀 Our Research Journey
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.8 }}>
                    Advancing AI-powered robotics for seamless human interaction.
                </Typography>
            </motion.div>

            {/* Research Interests */}
            <Typography variant="h3" sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}>
                🔬 Research Interests
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {[
                    { icon: <FaRobot />, title: "Human Activity Recognition", description: "Using MoveNet and LSTMs to analyze human motion." },
                    { icon: <FaBrain />, title: "Socially Aware Navigation", description: "Adaptive path planning for dynamic environments." },
                    { icon: <FaProjectDiagram />, title: "Group Interaction Recognition", description: "Exploring GNNs to detect group behaviors." },
                    { icon: <FaSearch />, title: "Multimodal Sensing", description: "Integrating LiDAR, RGB-D, and IMU for better perception." }
                ].map((interest, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card sx={{ background: "#1a1f2c", color: "white", padding: "20px", borderRadius: "10px" }}>
                            <CardContent sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <Typography variant="h4" sx={{ color: "#00c6ff" }}>{interest.icon}</Typography>
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>{interest.title}</Typography>
                                    <Typography variant="body1">{interest.description}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Research Timeline */}
            <Typography variant="h3" sx={{ textAlign: "center", mt: 6, mb: 4, fontWeight: "bold" }}>
                📅 Research Timeline
            </Typography>
            <Box sx={{ padding: "0 10%" }}>
                <ul className="timeline">
                    {["2024: Interest in socially aware path planning.", "7/2024: Best paper award at ICCRI 2024.", "9/2024: Expanding into social navigation.", "12/2024: Trained first LSTM model.", "2/2025: Implemented group social interaction model."].map((event, index) => (
                        <li key={index} className="timeline-event">{event}</li>
                    ))}
                </ul>
            </Box>

            {/* Research Technical Stack & Innovations */}
            <Grid container spacing={6} justifyContent="center" sx={{ mt: 6 }}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            background: "linear-gradient(135deg, #1a1f2c 30%, #2c3e50 100%)",
                            color: "white",
                            padding: "40px",
                            borderRadius: "15px",
                            boxShadow: "0 10px 30px rgba(0, 198, 255, 0.3)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: -20,
                                right: -20,
                                width: 80,
                                height: 80,
                                background: "rgba(0, 198, 255, 0.2)",
                                borderRadius: "50%",
                                filter: "blur(30px)",
                            }}
                        />
                        <ScienceIcon sx={{ fontSize: 60, mb: 3, color: "#00c6ff" }} />
                        <Typography
                            variant="h4"
                            sx={{ mb: 3, fontWeight: "bold", letterSpacing: 1.2, textTransform: "uppercase" }}
                        >
                            Technical Innovations
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}>
                            Our novel approach integrates cutting-edge technologies:
                        </Typography>
                        <List>
                            {[
                                "Adaptive Motion Planning Framework",
                                "Multi-modal Sensor Fusion",
                                "Real-time Activity Recognition (95% accuracy)",
                                "Social Navigation Metrics",
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ py: 0 }}>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: "#00c6ff" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: "500" }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            background: "linear-gradient(135deg, #1a1f2c 30%, #2c3e50 100%)",
                            color: "white",
                            padding: "40px",
                            borderRadius: "15px",
                            boxShadow: "0 10px 30px rgba(0, 198, 255, 0.3)",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: -20,
                                right: -20,
                                width: 80,
                                height: 80,
                                background: "rgba(0, 198, 255, 0.2)",
                                borderRadius: "50%",
                                filter: "blur(30px)",
                            }}
                        />
                        <CodeIcon sx={{ fontSize: 60, mb: 3, color: "#00c6ff" }} />
                        <Typography
                            variant="h4"
                            sx={{ mb: 3, fontWeight: "bold", letterSpacing: 1.2, textTransform: "uppercase" }}
                        >
                            Technical Stack
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {techStack.map((tech, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Paper
                                        elevation={4}
                                        sx={{
                                            background: "rgba(0, 114, 255, 0.15)",
                                            padding: "12px",
                                            borderRadius: "12px",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontSize: "1.5rem",
                                            color: "white",
                                            transition: "0.3s",
                                            "&:hover": {
                                                background: "#00c6ff",
                                                color: "#1a1f2c",
                                                transform: "scale(1.05)",
                                                boxShadow: "0 10px 20px rgba(0, 198, 255, 0.4)",
                                            },
                                        }}
                                    >
                                        {tech}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {/* Research Visualization */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ marginTop: "40px" }}
            >
                <ResearchVisualization />
            </motion.div>
        </Box>
    );
};

export default ResearchPage;
