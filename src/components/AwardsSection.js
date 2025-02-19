// src/components/AwardsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./AwardsSection.css"; // Optional: Add custom styling

const AwardsSection = () => {
    return (
        <section className="awards-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Awards & Recognition 🏆
            </motion.h2>

            <div className="awards-container">
                <div className="award-card">
                    <h3>🏅 Best Paper Award</h3>
                    <p>ICCRI 2024 – Recognized for excellence in **Socially Aware Obstacle Avoidance**.</p>
                </div>
                <div className="award-card">
                    <h3>🚀 Robotics Innovation Grant</h3>
                    <p>Supported by **XYZ Research Foundation** for its breakthrough in **Human-Robot Interaction**.</p>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
