import React, { useState, useEffect } from "react";
import "./DemonstrationPage.css";

function DemonstrationPage() {
    const [robotStatus, setRobotStatus] = useState("Idle");
    const [metrics, setMetrics] = useState({
        accuracy: 95,
        efficiency: 88,
        successRate: 92,
    });

    const handleAction = (action) => {
        setRobotStatus(`Performing: ${action}`);
        setTimeout(() => setRobotStatus("Idle"), 3000); // Reset after action
    };

    return (
        <div className="demonstration-container">
            {/* Hero Section */}
            <section className="hero-demo">
                <div className="hero-content">
                    <h1>Experience FulBot in Action</h1>
                    <p>Watch how FulBot performs real-world tasks with precision and intelligence.</p>
                </div>
                <div className="hero-video">
                    <video autoPlay loop muted>
                        <source src="/videos/demo.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* Live Robot Feed */}
            <section className="live-feed">
                <h2>Live Robot Demonstration</h2>
                <div className="feed-container">
                    <img src="/images/live-feed-placeholder.jpg" alt="Live Feed" />
                </div>
            </section>

            {/* Robot Actions */}
            <section className="robot-actions">
                <h2>Control FulBot</h2>
                <p>Status: <span className="robot-status">{robotStatus}</span></p>
                <div className="action-buttons">
                    <button onClick={() => handleAction("Navigate")}>Move to Location</button>
                    <button onClick={() => handleAction("Greet")}>Greet Person</button>
                    <button onClick={() => handleAction("Deliver Item")}>Deliver Object</button>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2>How FulBot Works</h2>
                <div className="steps">
                    <div className="step">
                        <img src="/images/detect-human.png" alt="Detection" />
                        <h3>Human Detection</h3>
                        <p>Using AI-powered vision, FulBot detects and identifies humans in the environment.</p>
                    </div>
                    <div className="step">
                        <img src="/images/activity-recognition.png" alt="Activity Recognition" />
                        <h3>Activity Recognition</h3>
                        <p>FulBot understands human actions to respond accordingly.</p>
                    </div>
                    <div className="step">
                        <img src="/images/navigation.png" alt="Navigation" />
                        <h3>Autonomous Navigation</h3>
                        <p>Using LiDAR and mapping, FulBot moves safely and efficiently.</p>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="performance-metrics">
                <h2>FulBot Performance</h2>
                <div className="metrics-grid">
                    <div className="metric">
                        <h3>{metrics.accuracy}%</h3>
                        <p>Recognition Accuracy</p>
                    </div>
                    <div className="metric">
                        <h3>{metrics.efficiency}%</h3>
                        <p>Operational Efficiency</p>
                    </div>
                    <div className="metric">
                        <h3>{metrics.successRate}%</h3>
                        <p>Task Success Rate</p>
                    </div>
                </div>
            </section>

            {/* User Testimonials */}
            <section className="testimonials">
                <h2>What People Say</h2>
                <div className="testimonial">
                    <p>"FulBot's interaction capabilities are impressive! It recognizes activities seamlessly."</p>
                    <h4>- Dr. John Doe, AI Researcher</h4>
                </div>
                <div className="testimonial">
                    <p>"The navigation is smooth and reliable. Great potential for hospital assistance!"</p>
                    <h4>- Sarah Nguyen, Robotics Engineer</h4>
                </div>
            </section>
        </div>
    );
}

export default DemonstrationPage;
