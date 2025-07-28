import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext"; // Import global theme context

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { darkMode } = useTheme(); // Access dark/light mode

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background spotlight glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
        style={{
          background: darkMode
            ? `radial-gradient(80px at center, rgba(92, 241, 246, 0.25), transparent 70%)` // cyan glow for dark mode
            : `radial-gradient(80px at center, rgba(0, 0, 0, 1), transparent 70%)`, // subtle gray glow for light mode
          mixBlendMode: "screen",
        }}
        animate={{
          x: position.x - window.innerWidth / 2,
          y: position.y - window.innerHeight / 2,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      ></motion.div>

      {/* Small cursor dot */}
      <motion.div
        className="pointer-events-none fixed rounded-full z-[60]"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: darkMode ? "#ffffff" : "#000000", // white for dark mode, black for light mode
          boxShadow: darkMode
            ? "0 0 8px rgba(255,255,255,0.8)"
            : "0 0 18px rgba(0, 0, 0, 1)", // soft gray glow for light mode
        }}
        animate={{
          x: position.x - 4, // half of width
          y: position.y - 4, // half of height
        }}
        transition={{ ease: "easeOut", duration: 0.05 }}
      ></motion.div>
    </>
  );
};

export default SpotlightCursor;
