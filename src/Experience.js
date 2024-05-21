import { motion } from 'framer-motion';
import './Experience.css';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const Experience = () => {
    const navigate = useNavigate();

    const handleEducation = () => {
        navigate('/education'); // Navigate to Education when "Education" is clicked
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
            className="experience"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <div className='experience-specific'>
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
                        <button onClick={handleEducation}>Education</button>
                        <button onClick={handleAboutMe}>About Me</button>
                        <button onClick={handleProjects}>Projects</button>
                        <button onClick={handleContact}>Contact</button>
                    </div>
                </nav>
                <h1 className='experience-title'>Experience</h1>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="company-and-role">
                            <h3 className="company-name">Incoming Software Engineering Intern @ Capgemini</h3>
                        </div>
                        <span className="date">June 2024 – August 2024</span>
                    </div>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="company-and-role">
                            <h3 className="company-name">Schneider</h3>
                            <span className="role">Full Stack Developer Intern | Madison, Wisconsin</span>
                        </div>
                        <span className="date">January 2024 – May 2024</span>
                    </div>
                    <ul className="experience-details">
                        <li>Developed a full-stack web application with ReactJS for the frontend and Node.js with Sequelize.js for the backend, enhancing UI/UX and database management.</li>
                        <li>Integrated Trimble Maps API for real-time truck navigation, showing time and distance to destination, boosting efficiency and user satisfaction.</li>
                        <li>Applied CSS for responsive design, ensuring consistent user experiences across various devices.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="company-and-role">
                            <h3 className="company-name">Adani Cement Company</h3>
                            <span className="role">Full Stack Software Engineering Intern | Mumbai, India</span>
                        </div>
                        <span className="date">June 2023 – August 2023</span>
                    </div>
                    <ul className="experience-details">
                        <li>Developed a user-friendly frontend service using AngularJS, TypeScript, and jQuery, which enhanced user experience and boosted user engagement by 20%.</li>
                        <li>Engineered robust backend services using Java and Tomcat servers, managing database connections and ensuring seamless data integration through SQL queries and API calls.</li>
                        <li>Managed code versioning and continuous integration processes through Azure DevOps, ensuring streamlined workflow and team collaboration.</li>
                        <li>Integrated responsive web design principles, ensuring optimal viewing experiences across various devices.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="company-and-role">
                            <h3 className="company-name">University of Wisconsin Madison</h3>
                            <span className="role">Undergraduate Research Scholar | Madison, Wisconsin</span>
                        </div>
                        <span className="date">September 2022 – May 2023</span>
                    </div>
                    <ul className="experience-details">
                        <li>Conducted a cross-sectional study focused on the impacts of TikTok on adolescent mental health.</li>
                        <li>Utilized advanced data analysis techniques, such as regression analysis and hypothesis testing, to interpret complex data sets.</li>
                        <li>Analyzed a comprehensive dataset of 1000+ survey responses, ensuring thorough understanding and precision in the research findings.</li>
                        <li>Identified nuanced connections between TikTok use and various mental health outcomes, shedding light on pressing societal concerns.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <div className="experience-header">
                        <div className="company-and-role">
                            <h3 className="company-name">Deloitte</h3>
                            <span className="role">Cyber Security and Risk Advisory Intern | Gurgaon, India</span>
                        </div>
                        <span className="date">July 2022 – August 2022</span>
                    </div>
                    <ul className="experience-details">
                        <li>Reviewed fundamental policies of Cyber Security for the Information Security Management System, adhering to ISO 27001 standards.</li>
                        <li>Developed process templates for Access Control Matrix (Annex A.9), Training Calendar (Annex A.7), Corrective Action Plan (CAP) (AnnexA.10), Visitor Register (Annex A.11), and Asset management (Annex A.8).</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
