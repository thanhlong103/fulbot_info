// src/components/AwardsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./AwardsSection.css";
import {Typography} from "@mui/material"; // Optional: Add custom styling

const AwardsSection = () => {
    return (
        <section className="awards-section">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    🏆 Awards & Recognition
                </Typography>
            </motion.h2>

            <div className="awards-container">
                <div className="award-card">
                    <h3>🏅 Best Paper Award</h3>
                    <p>ICCRI 2024</p>
                </div>
                <div className="award-card">
                    <h3>🚀 Scholarships & Grants</h3>
                    <p>Supported by IDP grant and TP-bank scholarship.</p>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
