import React from 'react';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <motion.div
            className="experience"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p><strong>Address:</strong> 432 West Gorham Street, #237, Madison, WI 53703</p>
        <p><strong>Email:</strong> damani2@wisc.edu</p>
        <p><strong>Phone:</strong> 608-960-5844</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/anish-damani/">linkedin.com/in/anish-damani</a></p>
      </div>
    </motion.div>
  );
};

export default Contact;
