import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme(); // Global theme state
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <div className="container my-2 flex justify-between items-center px-4">
        {/* Logo */}
        <h1
          className={`text-3xl font-extrabold bg-clip-text text-transparent ${
            darkMode
              ? "bg-gradient-to-r from-violet-200 to-blue-200"
              : "bg-gradient-to-r from-violet-500 to-blue-500"
          }`}
        >
          Ketan Tripathi
        </h1>

        {/* Menu Items */}
        <div className="floated-navbar flex justify-center flex-grow">
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
                    ? { opacity: 0, x: 20 }
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

        {/* Dark/Light Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileTap={{ scale: 0.9 }}
          className={`ml-4 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition
            ${
              darkMode
                ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                : "bg-gradient-to-r from-green-400 to-blue-400 text-white text-shadow-black shadow-sm "
            }`}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
