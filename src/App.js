import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

import HeroSection from "./components/HeroSection";
import AwardsSection from "./components/AwardsSection";
import SystemArchitecture from "./components/SystemArchitecture";

import ResearchPage from "./pages/ResearchPage";
import DemonstrationPage from "./pages/DemonstrationPage";
import AboutUsPage from "./pages/AboutUsPage";
import PeopleSection from "./components/PeopleSection";

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
        <div>
            <Router>
                <div className="fulbot-website">
                    {/* Navigation */}
                    <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
                        <div className="logo">FulBot</div>
                        <ul className="nav-links">
                            <li><Link to="/research">Research</Link></li>
                            <li><Link to="/demonstration">Demonstration</Link></li>
                            <li><Link to="/people">People</Link></li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={
                            <>
                                {/* Hero Section */}
                                <HeroSection />

                                {/* Overview Section */}
                                <section id="overview" className="overview">
                                    <SystemArchitecture />
                                </section>

                                {/* Awards Section */}
                                <AwardsSection />

                                <PeopleSection/>
                            </>
                        } />

                        <Route path="/research" element={<ResearchPage />} />
                        <Route path="/demonstration" element={<DemonstrationPage />} />
                        <Route path="/people" element={<AboutUsPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
