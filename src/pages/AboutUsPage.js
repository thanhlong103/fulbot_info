import React from "react";
import PeopleSection from "../components/PeopleSection";
import { Container, Typography, Button, Box, Grow } from "@mui/material";
import { motion } from "framer-motion";

export default function People() {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                <PeopleSection />
            </motion.div>

            <Grow in timeout={1000}>
                <Box textAlign="center" mt={8} p={4} bgcolor="#f5f5f5" borderRadius={3} boxShadow={3}>
                    <Typography variant="h4" fontWeight="bold" color="primary.main">Join Our Team</Typography>
                    <Typography variant="body1" color="text.secondary" mt={2}>
                        We’re always looking for passionate individuals to contribute to FulBot.
                    </Typography>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem" }}
                            onClick={() => window.location.href = 'mailto:contact@fulbot.com'}
                        >
                            Contact Us
                        </Button>
                    </motion.div>
                </Box>
            </Grow>
        </Container>
    );
}