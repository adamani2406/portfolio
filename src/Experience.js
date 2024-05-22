import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
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
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const experiences = [
        {
            company: 'Capgemini',
            role: 'Incoming Software Engineering Intern',
            duration: 'June 2024 – August 2024',
            details: []
        },
        {
            company: 'Schneider',
            role: 'Full Stack Developer Intern',
            location: 'Madison, Wisconsin',
            duration: 'January 2024 – May 2024',
            details: [
                'Developed a full-stack web application with ReactJS for the frontend and Node.js with Sequelize.js for the backend, enhancing UI/UX and database management.',
                'Integrated Trimble Maps API for real-time truck navigation, showing time and distance to destination, boosting efficiency and user satisfaction.',
                'Applied CSS for responsive design, ensuring consistent user experiences across various devices.'
            ]
        },
        {
            company: 'Adani Cement Company',
            role: 'Full Stack Software Engineering Intern',
            location: 'Mumbai, India',
            duration: 'June 2023 – August 2023',
            details: [
                'Developed a user-friendly frontend service using AngularJS, TypeScript, and jQuery, which enhanced user experience and boosted user engagement by 20%.',
                'Engineered robust backend services using Java and Tomcat servers, managing database connections and ensuring seamless data integration through SQL queries and API calls.',
                'Managed code versioning and continuous integration processes through Azure DevOps, ensuring streamlined workflow and team collaboration.',
                'Integrated responsive web design principles, ensuring optimal viewing experiences across various devices.'
            ]
        },
        {
            company: 'Deloitte',
            role: 'Cyber Security and Risk Advisory Intern',
            location: 'Gurgaon, India',
            duration: 'July 2022 – August 2022',
            details: [
                'Reviewed fundamental policies of Cyber Security for the Information Security Management System, adhering to ISO 27001 standards.',
                'Developed process templates for Access Control Matrix (Annex A.9), Training Calendar (Annex A.7), Corrective Action Plan (CAP) (Annex A.10), Visitor Register (Annex A.11), and Asset management (Annex A.8).',
            ]
        }
    ];

    return (
        <motion.div
            className="experience-container"
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
                    <button onClick={() => handleNavigation('/education')}>Education</button>
                    <button onClick={() => handleNavigation('/')}>About Me</button>
                    <button onClick={() => handleNavigation('/projects')}>Projects</button>
                    <button onClick={() => handleNavigation('/contact')}>Contact</button>
                </div>
            </nav>
            <div className="main-content">
                <h1 className="experience-title">Experience</h1>
                {experiences.map((experience, index) => (
                    <motion.div
                        className="experience-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="experience-header">
                            <div className="company-and-role">
                                <h3 className="company-name">{experience.company}</h3>
                                <span className="role">{experience.role}{experience.location && ` | ${experience.location}`}</span>
                            </div>
                            <span className="date">{experience.duration}</span>
                        </div>
                        {experience.details.length > 0 && (
                            <ul className="experience-details">
                                {experience.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Experience;
