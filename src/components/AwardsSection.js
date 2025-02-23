import React from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import "./AwardsSection.css";

const awards = [
    {
        title: "Best Paper Award",
        subtitle: "ICCRI 2024",
        description: "Awarded for outstanding research in human detection and computer vision at the ICCRI 2024 conference.",
        icon: "🏆"
    },
    {
        title: "Scholarships & Grants",
        subtitle: "Supported by IDP grant and TP-bank scholarship",
        description: "Received multiple scholarships and research grants for academic excellence and innovation.",
        icon: "🚀"
    }
];

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
                {awards.map((award, index) => (
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
                        <p className="award-subtitle">{award.subtitle}</p>
                        <p className="award-description">{award.description}</p>
                        <Button
                            variant="outlined"
                            className="award-btn"
                            href="#" // Replace with an actual link or modal trigger
                        >
                            Learn More
                        </Button>
                        <div className="award-glow"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AwardSection;
