// ResearchVisualization.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "./ResearchVisualization.css";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
    labels: ["Efficiency Gains", "Task Accuracy", "User Satisfaction"],
    datasets: [
        {
            label: "Performance Metrics",
            data: [40, 98, 95],
            backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

function ResearchVisualization() {
    return (
        <div className="research-chart">
            <Bar data={data} options={options} />
        </div>
    );
}

export default ResearchVisualization;
