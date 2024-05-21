import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    const handleExperience = () => {
        navigate('/experience'); // Navigate to Experience when "Experience" is clicked
    };

    const handleAboutMe = () => {
        navigate('/'); // Navigate to AboutMe when "AboutMe" is clicked
    };

    const handleContact = () => {
        navigate('/contact'); // Navigate to Contact when "Contact" is clicked
    };

    const handleProjects = () => {
        navigate('/projects'); // Navigate to Projects when "Projects" is clicked
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


  return (
    <motion.div
      className="projects"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
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
                        <button onClick={handleExperience}>Experience</button>
                        <button onClick={handleAboutMe}>About Me</button>
                        <button onClick={handleProjects}>Projects</button>
                        <button onClick={handleContact}>Contact</button>
                    </div>
                </nav>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Book Mapper</h3>
          <p>Developed a Java application to utilize a hash table data structure to efficiently map ISBNs to books stored in CSV format.</p>
        </div>
        <div className="project-card">
          <h3>University Map</h3>
          <p>Developed an online Java application to implement Dijkstra's shortest path algorithm for efficient navigation between UW-Madison buildings.</p>
        </div>
        <div className="project-card">
          <h3>Website</h3>
          <p>Designed an aesthetically appealing website for "Ravishal Silverhouse," showcasing bespoke Silverware products.</p>
        </div>
        <div className="project-card">
          <h3>Memory Allocator</h3>
          <p>Devised a heap-based memory allocator in C, using pointers, bit-masking, and shift operators.</p>
        </div>
        <div className="project-card">
          <h3>Regression Models</h3>
          <p>Developed regression models to predict census data for Wisconsin using Geopandas, Pandas, and Sklearn.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
