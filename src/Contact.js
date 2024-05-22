import './Contact.css'; 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

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

    return (
        <motion.div
            className="contact-container"
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
                    <button onClick={() => handleNavigation('/education')}>Education</button>
                </div>
            </nav>
            <div className="main-content">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-content">
                    <div className="contact-details">
                        <p><strong>Address:</strong> 432 West Gorham Street, #237, Madison, WI 53703</p>
                        <p><strong>Email:</strong> damani2@wisc.edu</p>
                        <p><strong>Phone:</strong> 608-960-5844</p>
                        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/anish-damani" target="_blank" rel="noopener noreferrer">linkedin.com/in/anish-damani</a></p>
                    </div>
                    <div className="contact-form">
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
