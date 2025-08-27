import React, { useState, useEffect } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
      <button
          className={`toggle-btn ${darkMode ? "active" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
  );
};

export default Toggle;
