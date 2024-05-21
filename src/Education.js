import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // Ensure you have this CSS file imported
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Education = () => {

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
      className="education"
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
                <h2 className="education-title">Education</h2>
      <div className="education-card">
        <p><strong>University of Wisconsin-Madison</strong> | Madison, WI | May 2025</p>
        <p>Bachelor of Science in Computer Science & Data Science | GPA: 3.89/4.00</p>
        <p>Relevant Coursework: Data Science Programming, Discrete Math, Computer Engineering, Machine Organization and Programming, Data Science Modelling, Algorithms, AI, Databases, Capstone, Statistics.</p>
        <p>Awards/Honors: Dean’s List</p>
      </div>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-card">
        <ul className="skills-list">
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>R</li>
          <li>Linux OS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>AngularJS</li>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Jupyter Notebook</li>
          <li>Pandas</li>
          <li>NumPy</li>
          <li>Matplotlib</li>
          <li>Junit</li>
          <li>ChatGPT 4.0</li>
          <li>Microsoft Office</li>
          <li>Natural Language Processing</li>
          <li>Neural Networks</li>
          <li>PyTorch</li>
          <li>Computer Vision</li>
          <li>Agile</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
