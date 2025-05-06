import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle theme"
    style={{
      width: "52px", 
      height: "52px",
      border: '1px solid #FFBF00',
      borderRadius: "8px"
    }}>
      {theme === "light" ? "🌙" : "🔆"}
    </button>
  );
};

export default ThemeToggle;
