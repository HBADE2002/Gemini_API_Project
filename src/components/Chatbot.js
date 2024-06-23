import React, { useState } from 'react';
import Message from './Message';
import './Chatbot.css';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInput('');

    try {
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const botMessage = response.text();
      const formattedBotMessage = formatMessage(botMessage);
      setMessages((prevMessages) => [...prevMessages, { text: formattedBotMessage, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Error fetching response from AI', isUser: false }]);
    }
  };

  const formatMessage = (message) => {
    return message
      .replace(/(\*\*)(.*?)(\*\*)/g, '<strong>$2</strong>') // Bold
      .replace(/(\*)(.*?)(\*)/g, '<em>$2</em>') // Italic
      .replace(/(\#\# )(.*?)(\n)/g, '<h2>$2</h2>') // H2 Header
      .replace(/(\# )(.*?)(\n)/g, '<h1>$2</h1>') // H1 Header
      .replace(/(\- )(.*?)(\n)/g, '<ul><li>$2</li></ul>') // List Item
      .replace(/(\n)/g, '<br>'); // Line Break
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
