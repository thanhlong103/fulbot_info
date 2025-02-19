// App.js (Main Component with Visualizations)
import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file
import Fulbot3DModel from "./components/Fulbot3DModel";
import InteractiveGrid from "./components/InteractiveGrid";
import ResearchVisualization from "./components/ResearchVisualization";
import HeroSection from "./components/HeroSection";

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fulbot-website">
            {/* Navigation */}
            <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
                <div className="logo">Fulbot</div>
                <ul className="nav-links">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <HeroSection />

            {/* Overview Section */}
            <section id="overview" className="overview">
                <h2>Transformative Service Robotics</h2>
                <div className="overview-content">
                    <p>
                        FulBot is an autonomous service robot platform combining state-of-the-art
                        computer vision, adaptive light-weight deep learning model, and precision mechatronics.
                    </p>
                </div>
                <Fulbot3DModel />
            </section>

            {/* Research Section */}
            <section id="research" className="research">
                <h2>Scientific Foundation</h2>
                <ResearchVisualization />
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h2>Innovative Capabilities</h2>
                <InteractiveGrid />
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Request Technical Documentation</h2>
                <form className="contact-form">{/* Form fields */}</form>
            </section>
        </div>
    );
}

export default App;
