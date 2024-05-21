import React from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
      );
    
}

export default App;
