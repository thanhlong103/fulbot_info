import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";

import HeroSection from "./components/HeroSection";
import AwardsSection from "./components/AwardsSection";
import SystemArchitecture from "./components/SystemArchitecture";

import ResearchPage from "./pages/ResearchPage";
import DemonstrationPage from "./pages/DemonstrationPage";
import AboutUsPage from "./pages/AboutUsPage";
import PeopleSection from "./components/PeopleSection";
import RunRobotPage from "./pages/RunRobotPage"; // Import RunRobotPage

function Navbar({ showNav }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showNav) return null; // Hide Navbar if showNav is false

    return (
        <nav className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
            <motion.div className="logo" whileHover={{ scale: 1.1 }}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>FulBot</Link>
            </motion.div>
            <ul className="nav-links">
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/run-robot")}
                        sx={{
                            borderRadius: '6px',
                            px: 3,
                            py: 1,
                            textTransform: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            boxShadow: 3,
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        RUN ROBOT
                    </Button>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to="/research">Research</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to="/demonstration">Demonstration</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to="/people">About us</Link></motion.li>
            </ul>
        </nav>
    );
}

function AppContent() {
    const location = useLocation(); // Correctly use useLocation inside Router
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        setShowNav(location.pathname !== "/run-robot");
    }, [location.pathname]);

    return (
        <>
            <Navbar showNav={showNav} />
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <motion.section
                                id="overview"
                                className="overview"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <SystemArchitecture />
                            </motion.section>
                            <AwardsSection />
                            <PeopleSection />
                        </>
                    } />
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/demonstration" element={<DemonstrationPage />} />
                    <Route path="/people" element={<AboutUsPage />} />
                    <Route path="/run-robot" element={<RunRobotPage />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
