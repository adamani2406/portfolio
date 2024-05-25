import './Contact.css'; 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';


const Contact = () => {
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
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('Form successfully submitted!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }, 1000);
    };

    const handleClear = () => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('');
        setErrors({});
    };

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
                <button className="theme-toggle-button" onClick={toggleTheme}>
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
            </nav>
            <div className="main-content">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-content">
                    <div className="contact-details">
                        <p><strong>Address:</strong> 432 West Gorham Street, #237, Madison, WI 53703</p>
                        <p><strong>(School) Email:</strong> damani2@wisc.edu</p>
                        <p><strong>(Personal) Email:</strong> damanianish@gmail.com</p>
                        <p><strong>Phone:</strong> +1 (608)-960-5844</p>
                        </div>
                    <h1 className="contact-title">Fill this form to get in touch with me</h1>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className="error">{errors.message}</p>}
                            <div className="form-buttons">
                                <button type = "button" className='button' onClick={handleSubmit}>Send</button>
                                <button type = "button" className="button" onClick={handleClear}>Clear</button>
                            </div>
                        </form>
                        {formStatus && <p className="form-status">{formStatus}</p>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
