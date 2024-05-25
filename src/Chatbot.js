import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => {
    setIsOpen(true);
  };

  const closeChatbot = () => {
    if (isOpen) {
        setMessages([]);
      }
      setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputMessage('');

    try {
      const response = await fetch('http://localhost:5000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage = { text: data.data.text, sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Error communicating with server', sender: 'bot' };
      setMessages([...messages, userMessage, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={openChatbot}>
        <span role="img" aria-label="chat">💬</span> Let's Chat!
      </button>
      <div className={`chatbot ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <span>Talk to me!</span>
          <button className="close-btn" onClick={closeChatbot}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
