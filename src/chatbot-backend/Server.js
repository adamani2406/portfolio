const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ message: 'Message is required' });
  }

  try {
    const response = await axios.get(`https://api.wit.ai/message?v=20200513&q=${userMessage}`, {
      headers: {
        Authorization: `Bearer 6Y7RNJSTHLJRTMJYCBINZKZSLTJCFR6K`,
      },
    });

    const witResponse = response.data;

    // Log the response from Wit.ai for debugging purposes
    console.log('Wit.ai response:', witResponse);
    let botMessage = '';

    if (witResponse.intents.length > 0) {
      const intent = witResponse.intents[0].name;
      console.log(intent)
      if (intent == 'greeting') {
        botMessage = 'Hello! How can I help you today?';
      } else if (intent === 'projects') {
        botMessage = 'I have worked on various projects including web development, AI, and more.';
      } else if (intent === 'about_me') {
        botMessage = 'I am a Computer Science student with a passion for programming and AI.';
      } else if (intent === 'experience') {
        botMessage = 'I have experience working as a software engineering intern at Capgemini and Schneider.';
      } else if (intent === 'skills') {
        botMessage = 'I am skilled in Java, Python, C, React, and many more technologies.';
      } else if (intent === 'contact') {
        botMessage = 'You can contact me at damani2@wisc.edu or damanianish@gmail.com.';
      } else if (intent === 'education') {
        botMessage = 'I am currently studying at the University of Wisconsin-Madison, majoring in Computer Science and Data Science.';
      } else if (intent === 'bye') {
        botMessage = 'Have a good rest of your day. Bye!';
      } else {
        botMessage = 'I am not sure how to respond to that. Can you please rephrase?';
      }
    } else {
      botMessage = 'I am not sure how to respond to that. Can you please rephrase?';
    }

    res.json({ message: 'Success', data: { text: botMessage } });
  } catch (error) {
    console.error('Error communicating with Wit.ai:', error.message);

    if (error.response) {
      // Wit.ai API responded with an error status code
      console.error('Wit.ai response data:', error.response.data);
      console.error('Wit.ai response status:', error.response.status);
      return res.status(error.response.status).json({ message: 'Error communicating with Wit.ai', error: error.response.data });
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received from Wit.ai:', error.request);
      return res.status(500).json({ message: 'No response received from Wit.ai' });
    } else {
      // Something else caused the error
      console.error('Error:', error.message);
      return res.status(500).json({ message: 'Error communicating with server' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
