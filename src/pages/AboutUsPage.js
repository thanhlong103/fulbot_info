import React from "react";
import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import PeopleSection from "../components/PeopleSection";

export default function People() {
  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0e17 0%, #1a1f2c 100%)",
      color: "white",
      py: 10,
      marginTop: "7vh",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Title Section */}
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h2" align="center" fontWeight="bold" gutterBottom sx={{ fontSize: "3rem" }}>
            About FulBot 🚀
          </Typography>
        </motion.div>

        {/* Introduction */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Typography align="center" fontSize={22} paragraph>
            FulBot is a student-led research group at <strong>Fulbright University Vietnam</strong>, supervised by a Ph.D. instructor.  
            We explore cutting-edge <strong>human-robot interaction (HRI)</strong> and <strong>autonomous robot navigation</strong>  
            in dynamic environments, pushing the boundaries of robotics innovation.  
          </Typography>
        </motion.div>

        {/* Community & Culture */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} sx={{ mt: 8 }}>
          <Typography variant="h4" align="center" fontWeight="bold" marginTop="7vh" gutterBottom>
            Why Join FulBot?
          </Typography>
          <Typography align="center" fontSize={22} paragraph sx={{ maxWidth: "800px", margin: "0 auto" }}>
            Being part of FulBot isn’t just about research—it's about being in a **supportive, collaborative**  
            environment where students **learn, experiment, and innovate** together.
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }} justifyContent="center">
            {[
              "💡 Hands-on Robotics Experience",
              "🎓 Research & Publications",
              "🤝 Networking with Experts",
              "🔬 Access to Cutting-Edge Tech",
              "🚀 Career-Boosting Opportunities"
            ].map((benefit, index) => (
              <Grid item key={index}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Box sx={{
                    px: 3, py: 1.5, background: "#0072ff33",
                    borderRadius: 3, color: "white", fontSize: "18px",
                    textAlign: "center", boxShadow: "0px 0px 10px rgba(0, 114, 255, 0.3)"
                  }}>
                    {benefit}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Team Section */}
        <PeopleSection />

        {/* Join Us Call-to-Action */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Box textAlign="center" mt={8} p={4} bgcolor="#0072ff33" borderRadius={3} boxShadow={3}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#0072ff", fontSize: "2.2rem" }}>
              Ready to Shape the Future of Robotics?
            </Typography>
            <Typography variant="body1" color="white" mt={2} fontSize={22}>
              Join FulBot and become part of the next generation of robotics pioneers.
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem" }}
                onClick={() => window.location.href = 'mailto:long.nguyen.210085@student.fulbright.edu.vn'}
              >
                Contact Us
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
