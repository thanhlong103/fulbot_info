// App.js - Modern FulBot Showcase
import React, { useState, useEffect } from "react";
import "./App.css"; // Custom CSS for styling
import { motion } from "framer-motion"; // Animation library
import InteractiveGrid from "./components/InteractiveGrid";
import ResearchVisualization from "./components/ResearchVisualization";
import HeroSection from "./components/HeroSection";
import AwardsSection from "./components/AwardsSection";
import SystemArchitecture from "./components/SystemArchitecture";
import PeopleSection from "./components/PeopleSection";

import ThanhLong from "../src/images/ThanhLong.jpg"

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
                <div className="logo">FulBot</div>
                <ul className="nav-links">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#demonstration">Demonstration</a></li>
                    <li><a href="#people">People</a></li>
                </ul>
            </nav>

            {/* Hero Section with Video */}
            <HeroSection />

            {/* Overview Section */}
            <section id="overview" className="overview">
                <SystemArchitecture />
            </section>

            {/* Research Section with Interactive Visualization */}
            <section id="research" className="research">
                <h2>Research & Development</h2>
                <ResearchVisualization />
            </section>

            {/* Demonstration Section */}
            <section id="demonstration" className="features">
                <h2>Live Demonstration</h2>
                <p>Watch FulBot in action navigating and interacting in real-world scenarios.</p>

                {/*/!* Video Showcase *!/*/}
                {/*<motion.div className="video-showcase" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>*/}
                {/*    <video autoPlay loop muted className="demo-video">*/}
                {/*        <source src="path-to-robot-demo.mp4" type="video/mp4" />*/}
                {/*    </video>*/}
                {/*</motion.div>*/}

                <InteractiveGrid />
            </section>

            {/* Awards & Recognition */}
            <AwardsSection />

            {/* People Section */}
            <section id="people" className="people">
                <PeopleSection />
            </section>
        </div>
    );
}

export default App;
