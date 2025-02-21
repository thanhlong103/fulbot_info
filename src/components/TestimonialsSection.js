// TestimonialsSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
    return (
        <Box sx={{ 
            padding: "80px 20px",
            background: "linear-gradient(180deg, #1a1f2c 0%, #0a0e17 100%)",
            color: "white",
            textAlign: "center"
        }}>
            <Typography variant="h3" sx={{ 
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
                What People Are Saying
            </Typography>
            <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.1rem" }}>
                        "FulBot has revolutionized the way we approach service robotics. Its adaptive AI and seamless navigation 
                        make it an invaluable asset in our daily operations."
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
                        - John Doe, CEO of TechCorp
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
};

export default TestimonialsSection;