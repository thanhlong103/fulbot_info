import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="fulbot-website">
            <Router>
                {/* Navigation */}
                <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
                    <motion.div className="logo" whileHover={{ scale: 1.1 }}>FulBot</motion.div>
                    <ul className="nav-links">
                        <motion.li whileHover={{ scale: 1.1 }}><Link to="/research">Research</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to="/demonstration">Demonstration</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to="/people">People</Link></motion.li>
                    </ul>
                </nav>

                <AnimatePresence>
                    <Routes>
                        <Route path="/" element={
                            <>
                                {/* Hero Section */}
                                <HeroSection />

                                {/* Overview Section */}
                                <motion.section
                                    id="overview"
                                    className="overview"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <SystemArchitecture />
                                </motion.section>

                                {/* Awards Section */}
                                <AwardsSection />

                                {/* People Section */}
                                <PeopleSection />
                            </>
                        } />

                        <Route path="/research" element={<ResearchPage />} />
                        <Route path="/demonstration" element={<DemonstrationPage />} />
                        <Route path="/people" element={<AboutUsPage />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </div>
    );
}

export default App;