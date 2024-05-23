import React from 'react';
import AnishPhoto from './AnishPhoto.jpg';
import { useTheme } from './ThemeContext';
import './AboutMe.css';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleEducation = () => {
    navigate('/education'); // Navigate to Education when "Education" is clicked
  };

  const handleExperience = () => {
    navigate('/experience'); // Navigate to Experience when "Experience" is clicked
  };

  const handleContact = () => {
    navigate('/contact'); // Navigate to Contact when "Contact" is clicked
  };

  const handleProjects = () => {
    navigate('/projects'); // Navigate to Projects when "Projects" is clicked
  };

  return (
    <div className="about-me">
      <video autoPlay loop muted className="background-video">
        <source src='vid4.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="profile-card">
          <img src={AnishPhoto} alt="Anish Damani" className="profile-photo" />
          <div className="profile-details">
            <h1>Anish Damani</h1>
            <p><i>Dynamic Computer Science candidate with expertise in programming languages such as Java, Python, and C.</i></p>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleEducation}>Education</button>
          <button onClick={handleExperience}>Experience</button>
          <button onClick={handleProjects}>Projects</button>
          <button onClick={handleContact}>Contact</button>
        </div>
        <button className="theme-toggle-button" onClick={toggleTheme}>
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
      </div>
      
    </div>
    
  );
};

export default AboutMe;
