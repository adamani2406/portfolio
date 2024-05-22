import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const quotes = [
        "“The best way to predict the future is to invent it.” – Alan Kay",
        "“Design is where science and art break even.” – Robin Matthews",
        "“Code never lies, comments sometimes do.“ – Ron Jeffries"
    ];

    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const skills = [
        "Java", "Python", "C", "R", "Linux OS", "HTML", "CSS", "JavaScript", 
        "AngularJS", "TypeScript", "MySQL", "Git", "Jupyter Notebook", "Pandas", 
        "NumPy", "Matplotlib", "JUnit", "ChatGPT 4.0", "Microsoft Office", 
        "Natural Language Processing", "Neural Networks", "PyTorch", "Computer Vision", "Agile"
    ];

    return (
        <motion.div
            className="education-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="navbar">
                <div className="left-section">
                    <div className="social-media-icons">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                    <h1 className="quote">{quote}</h1>
                </div>
                <div className="nav-buttons">
                    <button onClick={() => handleNavigation('/experience')}>Experience</button>
                    <button onClick={() => handleNavigation('/')}>About Me</button>
                    <button onClick={() => handleNavigation('/projects')}>Projects</button>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                </div>
            </nav>
            <div className="main-content">
                <h1 className="education-title">Education</h1>
                <div className="education-card">
                    <div className="education-header">
                        <h3 className="school-name">University of Wisconsin-Madison</h3>
                        <span className="date">May 2025</span>
                    </div>
                    <div className="degree">
                        Bachelor of Science in Computer Science & Data Science | GPA: 3.89/4.00
                    </div>
                    <div className="coursework">
                        <strong>Relevant Coursework:</strong> Data Science Programming, Discrete Math, Computer Engineering, Machine Organization and Programming, Data Science Modelling, Algorithms, AI, Databases, Capstone, Statistics.
                    </div>
                    <div className="honors">
                        <strong>Awards/Honors:</strong> Dean's List
                    </div>
                </div>
                <h1 className="skills-title">Skills</h1>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
