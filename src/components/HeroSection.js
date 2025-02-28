// HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Robot from "../images/robot_web.png";

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="gradient-text">SOLIX</span>
                    <br />
                    A Socially Aware Service Robot
                </motion.h1>
                
                <motion.p 
                    className="tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Redefining human-robot collaboration through adaptive AI and Motion Planning Framework
                </motion.p>
                
                <motion.button 
                    className="cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Watch Demo
                    <span className="cta-arrow">→</span>
                </motion.button>
            </div>
            
            <motion.div 
                className="hero-robot"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <img 
                    src={Robot} 
                    alt="FulBot" 
                    className="robot-image" 
                />
                <div className="robot-glow"></div>
            </motion.div>
        </section>
    );
}

export default HeroSection;