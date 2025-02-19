import React from "react";
import "./HeroSection.css";
import Robot from "../images/robot_web.png";

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>FulBot: A Socially Aware Service Robot</h1>
                <p className="tagline">
                    Redefining human-robot collaboration through adaptive AI and Motion
                    Planning Framework
                </p>
                <button className="cta">Contact us</button>
            </div>
            <div className="hero-background">
                <img src={Robot} alt="FulBot" className="hero-robot-image" />
            </div>
        </section>
    );
}

export default HeroSection;
