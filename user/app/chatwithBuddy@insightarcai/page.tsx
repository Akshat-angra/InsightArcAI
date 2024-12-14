"use client";
import { useState } from "react";

const ChatInterface = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      setConversation([
        ...conversation,
        { sender: "User", message: userInput },
      ]);
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 font-Montserrat text-teal-400">
        Chat With,{" "}
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent text-gradient-darks">
            Buddy
          </span>
          <img
            src="/highlight.svg"
            alt="highlight"
            className="absolute bottom-[-7px] left-0 w-full"
          />
        </span>
        ✨
      </h1>
      <div className="flex-1 border border-gray-300 rounded-lg overflow-y-auto p-4 mb-8 bg-white shadow-md font-Josefin">
        {conversation.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong className="text-blue-500">{msg.sender}:</strong>{" "}
            <span className={msg.sender === "User" ? "text-black" : ""}>
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center font-Josefin">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here"
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 font-Josefin"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
