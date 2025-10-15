// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      {/* Brand */}
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        TaskQuest
      </h1>

   

      {/* Dark mode toggle */}
      <Button
        size="sm"
        variant="secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}
      </Button>
    </nav>
  );
};

export default Navbar;
