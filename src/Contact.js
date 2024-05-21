import './Contact.css'; // Ensure you have this CSS file imported
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
    <div className="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-content">
        <div className="contact-details">
          <p><strong>Address:</strong> 432 West Gorham Street, #237, Madison, WI 53703</p>
          <p><strong>Email:</strong> damani2@wisc.edu</p>
          <p><strong>Phone:</strong> 608-960-5844</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/anish-damani" target="_blank" rel="noopener noreferrer">linkedin.com/in/anish-damani</a></p>
        </div>
        <div className="contact-form">
          <iframe 
            src="https://ydiiowpr.forms.app/student-profile-inquiry-form" 
            width="100%" 
            height="600" 
            >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Contact;
