import React, { useState } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm Liladhar's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: getBotResponse(input),
        },
      ]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (msg) => {
    const lowerMsg = msg.toLowerCase();

    // Greeting responses
    if (
      lowerMsg.includes("hello") ||
      lowerMsg.includes("hi") ||
      lowerMsg.includes("hey")
    ) {
      return "Hello! I'm Liladhar's AI assistant. I can tell you about his skills, experience, projects, or how to get in touch. What would you like to know?";
    }

    // About responses
    if (
      lowerMsg.includes("about") ||
      lowerMsg.includes("who is") ||
      lowerMsg.includes("tell me about")
    ) {
      return "Liladhar is a Computer Science graduate and Front-End Developer based in Mumbai, India. He's passionate about creating user-friendly web applications and has 2+ years of experience in web development.";
    }

    // Skills responses
    if (
      lowerMsg.includes("skill") ||
      lowerMsg.includes("tech") ||
      lowerMsg.includes("technology")
    ) {
      return "Liladhar's technical skills include:\n• Frontend: HTML5, CSS3, JavaScript (ES6+)\n• Frameworks: React.js\n• Styling: Tailwind CSS\n• Version Control: Git\n• Additional: Responsive Design, UI/UX Design Principles";
    }

    // Project responses
    if (
      lowerMsg.includes("project") ||
      lowerMsg.includes("work") ||
      lowerMsg.includes("portfolio")
    ) {
      return "Liladhar has worked on several projects including:\n1. Crypto Price Tracker\n2. E-commerce Platform\n3. Weather Dashboard\nYou can see all projects in detail in the Projects section above!";
    }

    // Services responses
    if (
      lowerMsg.includes("service") ||
      lowerMsg.includes("offer") ||
      lowerMsg.includes("help")
    ) {
      return "Liladhar offers the following services:\n• Web Development\n• UI/UX Design\n• Responsive Design\n• Frontend Development\n• Web Applications\n• Custom Website Design";
    }

    // Contact responses
    if (
      lowerMsg.includes("contact") ||
      lowerMsg.includes("reach") ||
      lowerMsg.includes("email")
    ) {
      return "You can reach Liladhar through:\n• Email: your.email@example.com\n• Phone: +91 1234567890\n• Location: Mumbai, India\nOr use the contact form above!";
    }

    // Experience responses
    if (
      lowerMsg.includes("experience") ||
      lowerMsg.includes("work history") ||
      lowerMsg.includes("background")
    ) {
      return "Liladhar has 2+ years of experience in web development, having completed 10+ projects and worked with 5+ happy clients. He specializes in creating responsive and user-friendly web applications.";
    }

    // Education responses
    if (
      lowerMsg.includes("education") ||
      lowerMsg.includes("study") ||
      lowerMsg.includes("degree")
    ) {
      return "Liladhar has a degree in Computer Science and continuously updates his skills through online courses and hands-on project work.";
    }

    // Default response
    return "I can help you learn about Liladhar's:\n• Background & Experience\n• Technical Skills\n• Projects\n• Services\n• Contact Information\nWhat would you like to know?";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? (
          <FiX className="text-white text-2xl" />
        ) : (
          <FiMessageSquare className="text-white text-2xl" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-4 z-50 w-80 sm:w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-800 transition-all duration-300 transform 
        ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-lg">
          <h3 className="text-white font-semibold">Chat Assistant</h3>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FiSend className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
