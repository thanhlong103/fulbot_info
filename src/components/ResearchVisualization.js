import React, { useEffect, useState } from "react";
import "./ResearchVisualization.css";

function ResearchVisualization() {
    const [papers, setPapers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    useEffect(() => {
        fetch("/data/researchPapers.json")
            .then((response) => response.json())
            .then((data) => setPapers(data))
            .catch((error) => console.error("Error loading research papers:", error));
    }, []);

    const filteredPapers = papers.filter(
        (paper) =>
            paper.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (categoryFilter === "" || paper.category === categoryFilter)
    );

    const uniqueCategories = [...new Set(papers.map((paper) => paper.category))];

    return (
        <div className="research-container">
            <h2 className="research-title">Research Papers that Contribute to FulBot</h2>

            <div className="filter-container">
                <input
                    type="text"
                    placeholder="🔍 Search papers..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <select
                    className="category-filter"
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <table className="research-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author(s)</th>
                    <th>Year</th>
                    <th>Category</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {filteredPapers.map((paper, index) => (
                    <tr key={index}>
                        <td>{paper.title}</td>
                        <td>{paper.author}</td>
                        <td>{paper.year}</td>
                        <td className="category-cell">{paper.category}</td>
                        <td>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-link"
                            >
                                View Paper
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResearchVisualization;
