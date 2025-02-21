// TimelineSection.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const milestones = [
    {
        date: "Q3 2023",
        title: "Concept Development",
        description: "Initial research and feasibility studies for social robotics platform"
    },
    {
        date: "Q4 2023",
        title: "Prototype Design",
        description: "First hardware prototype with basic navigation capabilities"
    },
    // Add more milestones
];

const TimelineSection = () => {
    return (
        <Box sx={{
            padding: "80px 20px",
            background: "linear-gradient(180deg, #1a1f2c 0%, #0a0e17 100%)",
            color: "white"
        }}>
            <Typography variant="h3" sx={{
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
                What did we do?
            </Typography>

            <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <TimelineItem sx={{ minHeight: "120px" }}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: "#0072ff" }} />
                                {index < milestones.length - 1 && (
                                    <TimelineConnector sx={{ bgcolor: "#0072ff33" }} />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {milestone.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: "#00c6ff", mb: 1 }}>
                                    {milestone.date}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {milestone.description}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default TimelineSection;