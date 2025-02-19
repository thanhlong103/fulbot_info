// src/components/MotionBox.js
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import React from "react";

export const MotionBox = ({ children }) => {
    return (
        <Box component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {children}
        </Box>
    );
};
