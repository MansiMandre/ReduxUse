// src/Components/Navbar.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../feature/theme/themeSlice";

function Navbar() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white dark:bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">My App</h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 dark:bg-yellow-300 dark:text-black"
          >
            {mode === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 space-y-2 lg:hidden">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="block w-full text-left bg-white text-black px-3 py-2 rounded hover:bg-gray-200 dark:bg-yellow-300 dark:text-black"
          >
            {mode === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
