import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} style={buttonStyle}>
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    background: 'var(--accent-color)',
    border: 'none',
    borderRadius: '5px',
    color: 'var(--primary-color)',
    cursor: 'pointer',
};

export default ThemeToggle;
