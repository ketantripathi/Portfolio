import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/ketantripathi",
      color: darkMode ? "hover:text-gray-300" : "hover:text-green-600",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ketan-tripathi",
      color: darkMode ? "hover:text-blue-400" : "hover:text-green-500",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:ketantripathi807@gmail.com",
      color: darkMode ? "hover:text-red-400" : "hover:text-green-500",
    },
    {
      icon: <FaPhoneAlt />,
      href: "tel:+917879412384",
      color: darkMode ? "hover:text-green-400" : "hover:text-green-500",
    },
  ];

  return (
    <footer
      className={`relative w-full py-8 px-6 md:px-20 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gradient-to-b from-green-50 to-white text-gray-900"
      }`}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
            : "linear-gradient(135deg, #34d399, #3b82f6)",
        }}
      ></div>
      <div
        className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
            : "linear-gradient(135deg, #6ee7b7, #60a5fa)",
        }}
      ></div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className={`text-2xl cursor-none transition-colors ${link.color}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Divider */}
      <div className={`border-t my-4 ${darkMode ? "border-gray-700/50" : "border-green-300/50"}`}></div>

      {/* Copyright with secret button */}
      <motion.div
        className={`text-center text-sm ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()}{" "}
        <span
          onClick={() => navigate("/login")}
          className={` bg-clip-text text-transparent hover:underline ${
            darkMode
              ? "bg-gradient-to-r from-violet-400 to-blue-400"
              : "bg-gradient-to-r from-green-500 to-blue-500"
          }`}
          title="Click for Admin Login"
        >
          Ketan Tripathi
        </span>
        . All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
