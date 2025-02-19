// InteractiveGrid.js
import React from 'react';
import './InteractiveGrid.css';

function InteractiveGrid() {
    const features = [
        { icon: '🤖', title: 'Context-Aware Intelligence', description: 'Proprietary NLP engine understands 98% of service commands' },
        { icon: '🔄', title: 'Self-Optimizing Workflows', description: 'Continuous improvement through operational feedback loops' },
        { icon: '👥', title: 'Collaborative Mode', description: 'Seamless handover system for human-robot task sharing' },
    ];

    return (
        <div className="feature-grid">
            {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default InteractiveGrid;