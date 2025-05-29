"use client";
import { useState, useEffect, useRef } from "react";

const Msg = () => {
  const [usermsg, setUsermsg] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey && usermsg.trim() !== "") {
      e.preventDefault();
      setMessages([...messages, usermsg]);
      setUsermsg("");
      e.target.style.height = "auto";
    }
  };

  const handleChange = (e) => {
    setUsermsg(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-1 p-4 text-white overflow-y-auto">
        <ul className="flex flex-col justify-end items-end space-y-2">
          {messages.map((item, index) => (
            <li
              key={index}
              className="text-end p-2 rounded-lg bg-slate-800 max-w-xs break-words"
            >
              {item}
            </li>
          ))}
        </ul>
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-slate-700 p-4 bg-gray-800">
        <textarea
          ref={inputRef}
          placeholder="Plan your next trip now"
          value={usermsg}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          rows={1}
          className="w-full resize-none overflow-hidden text-base p-2 border border-slate-600 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Msg;
