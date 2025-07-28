import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme(); // Global theme state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact Me", link: "/contact" },
  ];

  return (
    <nav
      className={`w-full fixed z-20 transition-colors duration-500 ${
        darkMode
          ? "bg-black/80 backdrop-blur-lg shadow-sm shadow-white/90"
          : "bg-white/70 backdrop-blur-lg shadow-sm shadow-gray-300"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1
          className={`text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent ${
            darkMode
              ? "bg-gradient-to-r from-violet-200 to-blue-200"
              : "bg-gradient-to-r from-green-500 to-blue-500"
          }`}
        >
          Ketan Tripathi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul
            className={`flex rounded-full shadow-lg border px-2 py-1 transition-all ${
              darkMode
                ? "bg-black/80 border-white/20"
                : "bg-white/80 border-gray-300"
            }`}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 1, x: 0 }}
                animate={
                  hoveredIndex !== null && hoveredIndex !== index
                    ? { opacity: 0.5, x: 10 }
                    : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`font-medium px-4 py-2 m-1 rounded-full transition-all duration-300 
                  ${
                    darkMode
                      ? "text-white hover:bg-gradient-to-r hover:from-violet-500/50 hover:to-blue-500/50 hover:border-white/40 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                      : "text-gray-800 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300 hover:text-white hover:shadow-md"
                  }`}
              >
                <Link to={item.link}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition
              ${
                darkMode
                  ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                  : "bg-gradient-to-r from-green-400 to-blue-400 text-white"
              }`}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes
                className={`text-2xl ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              />
            ) : (
              <FaBars
                className={`text-2xl ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide In) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden flex flex-col items-center space-y-4 py-6 border-t transition-colors ${
              darkMode ? "bg-black border-white/20" : "bg-white border-gray-200"
            }`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition ${
                  darkMode
                    ? "text-white hover:text-violet-400"
                    : "text-gray-800 hover:text-green-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
