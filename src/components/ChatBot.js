// components/Chatbot.js
import React, { useState } from 'react';
import styles from '../styles/Chatbot.module.scss';

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I can help you navigate this website. Ask me anything!", isBot: true },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim() !== "") {
      const newMessage = { text: userInput, isBot: false };
      setMessages([...messages, newMessage]);
      respondToMessage(userInput);
      setUserInput('');
    }
  };

  const respondToMessage = (message) => {
    let response = "I'm here to help you navigate. Try asking for 'About', 'Projects', or 'Contact'.";
    if (message.toLowerCase().includes("about")) {
      response = "Sure! You can learn more about me by clicking on the 'About Me' section in the navbar.";
    } else if (message.toLowerCase().includes("projects")) {
      response = "I have a list of projects on the 'Projects' page. Click on the 'Projects' link to see them.";
    } else if (message.toLowerCase().includes("contact")) {
      response = "You can find my contact details on the 'Contact Me' page.";
    }
    setMessages([...messages, { text: response, isBot: true }]);
  };

  return (
    <div className={styles.chatbot}>
      <button className={styles.chatToggle} onClick={() => setChatOpen(!chatOpen)}>
        🤖 Chat
      </button>
      {chatOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={msg.isBot ? styles.botMessage : styles.userMessage}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
