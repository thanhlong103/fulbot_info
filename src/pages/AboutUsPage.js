import React from "react";
import { Container, Typography, Button, Box} from "@mui/material";
import { motion } from "framer-motion";
import PeopleSection from "../components/PeopleSection";

export default function People() {
  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0e17 0%, #1a1f2c 100%)",
      color: "white",
      py: 10,
      marginTop:"7vh"
    }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
            About FulBot
          </Typography>
          <Typography align="center" fontSize={25} gutterBottom>
            FulBot is a student-led research group at Fulbright University Vietnam, supervised by a Ph.D. instructor, 
            dedicated to exploring human-robot interaction (HRI) and autonomous robot navigation in dynamic environments. 
            Our mission is to advance robotics research through collaboration, innovation, and hands-on experimentation.
          </Typography>
          <Typography align="center" fontSize={25} gutterBottom>
            We focus on key areas such as socially aware motion planning, human activity recognition, and sensor fusion 
            for real-world robotic applications. By integrating techniques in computer vision, deep learning, and control systems, 
            we develop intelligent robotic systems capable of adapting to complex environments.
            Beyond research, FulBot aims to foster a vibrant robotics community at Fulbright University Vietnam. 
          </Typography>
          <Typography align="center" fontSize={25} gutterBottom>
            We actively support each other in learning new robotics techniques, sharing insights, and conducting impactful research. 
            Our goal is to create a platform where students can engage in cutting-edge robotics projects, contribute to academic advancements, 
            and inspire future innovators in the field.
          </Typography>
        </motion.div>

        <PeopleSection/>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Box textAlign="center" mt={8} p={4} bgcolor="#0072ff33" borderRadius={3} boxShadow={3}>
            <Typography variant="h4" fontWeight="bold" color="primary.main" fontSize={40}>
              Join Our Team
            </Typography>
            <Typography variant="body1" color="ffffff" mt={2} fontSize={25}>
              We’re always looking for passionate students to contribute to FulBot.
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