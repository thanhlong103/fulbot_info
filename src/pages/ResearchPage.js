import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@mui/material";
import { FaRobot, FaBrain, FaProjectDiagram, FaSearch } from "react-icons/fa";
import ResearchVisualization from "../components/ResearchVisualization";
import "./ResearchPage.css"; // Custom styles for a polished look

const ResearchPage = () => {
    return (
        <div className="research-page">
            {/* Research Header */}
            <motion.div
                className="research-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">🚀 Our Research Journey</h1>
                <p className="subtitle">
                    Advancing AI-powered robotics for seamless human interaction.
                </p>
            </motion.div>

            {/* Research Interests */}
            <motion.div
                className="research-interests"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h2 className="section-title">🔬 Research Interests</h2>
                <div className="interests-grid">
                    <Card className="interest-card">
                        <FaRobot className="icon" />
                        <CardContent>
                            <h3>Human Activity Recognition</h3>
                            <p>Using MoveNet and LSTMs to analyze human motion.</p>
                        </CardContent>
                    </Card>

                    <Card className="interest-card">
                        <FaBrain className="icon" />
                        <CardContent>
                            <h3>Socially Aware Navigation</h3>
                            <p>Adaptive path planning for dynamic environments.</p>
                        </CardContent>
                    </Card>

                    <Card className="interest-card">
                        <FaProjectDiagram className="icon" />
                        <CardContent>
                            <h3>Group Interaction Recognition</h3>
                            <p>Exploring GNNs to detect group behaviors.</p>
                        </CardContent>
                    </Card>

                    <Card className="interest-card">
                        <FaSearch className="icon" />
                        <CardContent>
                            <h3>Multimodal Sensing</h3>
                            <p>Integrating LiDAR, RGB-D, and IMU for better perception.</p>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            {/* Research Journey Timeline */}
            <motion.div
                className="research-timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <h2 className="section-title">📅 Research Timeline</h2>
                <ul className="timeline">
                    <li>
                        <div className="date">2024</div>
                        <div className="desc">Had some interest in building a socially aware path planing framework.
                        </div>
                    </li>
                    <li>
                        <div className="date">7/2024</div>
                        <div className="desc">Implemented the first Socially Aware Motion Planning use Data Fusion and
                            had the best paper award at ICCRI 2024.
                        </div>
                    </li>
                    <li>
                        <div className="date">9/2024</div>
                        <div className="desc">Started expanding into socially aware navigation with effect of Human
                            Activities.
                        </div>
                    </li>
                    <li>
                        <div className="date">12/2024</div>
                        <div className="desc">Finished training the first LSTM model to recognize human activities based
                            on human skeleton pose.
                        </div>
                    </li>
                    <li>
                        <div className="date">2/2024</div>
                        <div className="desc">Implemented a group social interaction model based on human skeleton poses.
                        </div>
                    </li>
                </ul>
            </motion.div>

            {/* Research Visualizations */}
            <motion.div
                className="research-visualization"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.9 }}
            >
                <ResearchVisualization />
            </motion.div>
        </div>
    );
};

export default ResearchPage;
