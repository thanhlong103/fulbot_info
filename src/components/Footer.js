// Footer.js
import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ 
            padding: "40px 20px",
            background: "#0a0e17",
            color: "white",
            textAlign: "center",
            borderTop: "1px solid #ffffff15"
        }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
                &copy; 2024 FulBot. All rights reserved.
            </Typography>
            <Typography variant="body1">
                <Link href="#" color="inherit" sx={{ mx: 1 }}>Contact Us</Link> | 
                <Link href="#" color="inherit" sx={{ mx: 1 }}>Privacy Policy</Link> | 
                <Link href="#" color="inherit" sx={{ mx: 1 }}>Terms of Service</Link>
            </Typography>
        </Box>
    );
};

export default Footer;