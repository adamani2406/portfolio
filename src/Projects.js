import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Projects = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const quotes = [
        "“The best way to predict the future is to invent it.” – Alan Kay",
        "“Design is where science and art break even.” – Robin Matthews",
        "“Code never lies, comments sometimes do.“ - Ron Jeffries"
    ];

    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const projects = [
        {
            title: "Book Mapper",
            description: "Developed a Java application to utilize a hash table data structure to efficiently map ISBNs to books stored in CSV format."
        },
        {
            title: "University Map",
            description: "Developed an online Java application to implement Dijkstra's shortest path algorithm for efficient navigation between UW-Madison buildings."
        },
        {
            title: "Website",
            description: "Designed an aesthetically appealing website for 'Ravishal Silverhouse,' showcasing bespoke Silverware products."
        },
        {
            title: "Memory Allocator",
            description: "Devised a heap-based memory allocator in C, using pointers, bit-masking, and shift operators."
        },
        {
            title: "Regression Models",
            description: "Developed regression models to predict census data for Wisconsin using Geopandas, Pandas, and Sklearn."
        }
    ];

    return (
        <motion.div
            className="projects-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="navbar">
                <div className="left-section">
                    <div className="social-media-icons">
                    <a href="https://github.com/adamani2406" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anish-damani/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                   </div>
                    <h1 className="quote">{quote}</h1>
                </div>
                <div className="nav-buttons">
                    <button onClick={() => handleNavigation('/experience')}>Experience</button>
                    <button onClick={() => handleNavigation('/')}>About Me</button>
                    <button onClick={() => handleNavigation('/education')}>Education</button>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                </div>
                <button className="theme-toggle-button" onClick={toggleTheme}>
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
            </nav>
            <div className="main-content">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
