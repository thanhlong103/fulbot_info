import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import "./AwardsSection.css";

const AwardSection = () => {
    return (
        <section className="awards-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Typography variant="h3" sx={{
                    textAlign: "center",
                    mb: 8,
                    color: "white",
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
                    Awards & Recognition
                </Typography>
            </motion.div>

            <div className="awards-container">
                {[
                    {
                        title: "Best Paper Award",
                        subtitle: "ICCRI 2024",
                        icon: "🏆"
                    },
                    {
                        title: "Scholarships & Grants",
                        subtitle: "Supported by IDP grant and TP-bank scholarship",
                        icon: "🚀"
                    }
                ].map((award, index) => (
                    <motion.div
                        key={index}
                        className="award-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="award-icon">{award.icon}</div>
                        <h3>{award.title}</h3>
                        <p>{award.subtitle}</p>
                        <div className="award-glow"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AwardSection;