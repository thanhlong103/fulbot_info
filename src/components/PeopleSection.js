import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Grid, Avatar, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const PeopleSection = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch("/data/member.json")
            .then((response) => response.json())
            .then((data) => setTeamMembers(data))
            .catch((error) => console.error("Error loading team data:", error));
    }, []);

    return (
        <Box sx={{
            padding: "80px 20px",
            background: "linear-gradient(180deg, #0a0e17 0%, #1a1f2c 100%)",
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
                Our Team
            </Typography>

            <Grid container spacing={6} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{
                                background: "linear-gradient(45deg, #0072ff33, #ffffff0a)",
                                border: "1px solid #ffffff15",
                                borderRadius: "15px",
                                padding: "30px",
                                height: "100%",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-10px)"
                                }
                            }}>
                                <Avatar 
                                    src={member.image} 
                                    sx={{ 
                                        width: 150, 
                                        height: 150, 
                                        mb: 3,
                                        border: "3px solid #0072ff",
                                        boxShadow: "0 0 20px rgba(0, 114, 255, 0.3)"
                                    }} 
                                />
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: "#00c6ff", mb: 2 }}>
                                    {member.role}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                                    {member.bio}
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    <Link href={member.links.linkedin} target="_blank">
                                        <LinkedInIcon sx={{ color: "#0077b5", fontSize: 30 }} />
                                    </Link>
                                    <Link href={member.links.github} target="_blank">
                                        <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
                                    </Link>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PeopleSection;
