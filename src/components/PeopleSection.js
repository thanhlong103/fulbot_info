import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, GitHub } from "@mui/icons-material";

import ThanhLong from "../images/ThanhLong.jpg"
import DuongPhung from "../images/DuongPhung.jpg"
import DucPhu from "../images/DucPhu.png"

// Sample team data
const teamMembers = [
    {
        name: "Nguyen Thanh Long",
        role: "Co25 - Lead Developer",
        image: ThanhLong,
        linkedin: "https://www.linkedin.com/in/thanhlong103/",
        github: "https://github.com/thanhlong103"
    },
    {
        name: "Nguyen Duc Phu",
        role: "Co24 - Developer",
        image: DucPhu,
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith"
    },
    {
        name: "Ton Nu Thanh Thao",
        role: "Co27 - Developing Assistant",
        image: "/images/emily.jpg",
        linkedin: "https://linkedin.com/in/emilydavis",
        github: "https://github.com/emilydavis"
    },
    {
        name: "Phung Manh Duong",
        role: "Ph.D - Instructor",
        image: DuongPhung,
        linkedin: "https://linkedin.com/in/emilydavis",
        github: "https://github.com/emilydavis"
    }
];

const PeopleSection = () => {
    return (
        <Container id="people" sx={{ py: 8 }}>
            <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                Meet our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card sx={{ textAlign: "center", p: 2, boxShadow: 4, borderRadius: 3 }}>
                                <Avatar
                                    src={member.image}
                                    alt={member.name}
                                    sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                                    <Typography variant="body1" color="text.secondary">{member.role}</Typography>
                                    <div style={{ marginTop: 10 }}>
                                        <IconButton component="a" href={member.linkedin} target="_blank" color="primary">
                                            <LinkedIn />
                                        </IconButton>
                                        <IconButton component="a" href={member.github} target="_blank" color="inherit">
                                            <GitHub />
                                        </IconButton>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PeopleSection;
