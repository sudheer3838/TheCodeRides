import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [greeting, setGreeting] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollTopVisible(window.scrollY > 200);
    });

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour < 18) {
      setGreeting("Good Afternoon 🌤️");
    } else {
      setGreeting("Good Evening 🌙");
    }
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const sendMessage = () => {
    if (userMessage.trim() === "") return;
    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm just a bot! 😃", sender: "bot" }]);
    }, 1000);
    setUserMessage("");
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Header with Gradient */}
      <header className="banner">
        <h1>{greeting}, I'm Your Name!</h1>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Chat Box */}
      <div className="chat-box">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isScrollTopVisible && (
        <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
          ⬆ Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Resume;
