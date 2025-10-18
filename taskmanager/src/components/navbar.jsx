// src/components/Navbar.jsx
import React from "react";
import Button from "./Button";
import { useTheme } from "./theme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
    </nav>
  );
};

export default Navbar;
