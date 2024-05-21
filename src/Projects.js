import React from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <motion.div
            className="experience"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
      <h2>Projects</h2>
      <div className="card">
        <h3>Book Mapper</h3>
        <p>Developed a Java application to utilize a hash table data structure to efficiently map ISBNs to books stored in CSV format.</p>
      </div>
      <div className="card">
        <h3>University Map</h3>
        <p>Developed online Java application to implement Dijkstra's shortest path algorithm for efficient navigation between UW-Madison buildings.</p>
      </div>
      <div className="card">
        <h3>Website</h3>
        <p>Designed an aesthetically appealing website for "Ravishal Silverhouse," showcasing bespoke Silverware products.</p>
      </div>
      <div className="card">
        <h3>Memory Allocator</h3>
        <p>Devised a heap-based memory allocator in C, using pointers, bit-masking, and shift operators.</p>
      </div>
      <div className="card">
        <h3>Regression Models</h3>
        <p>Developed regression models to predict census data for Wisconsin using Geopandas, Pandas, and Sklearn.</p>
      </div>
    </motion.div>
  );
};

export default Projects;
