import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaUsers, FaTrophy } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const timelineData = [
  {
    year: "2022",
    title: "Joined VNIT Nagpur - CSE",
    description:
      "Started my journey in Computer Science and explored programming fundamentals, algorithms, and development.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2023",
    title: "Joined AXIS Club Core Team",
    description:
      "Became Workshop Head & Website Head for AXIS'25, organizing technical workshops and building the event website.",
    icon: <FaUsers />,
  },
  {
    year: "2024",
    title: "Major Projects & Internships",
    description:
      "Built multiple MERN projects, explored AI/ML, and conducted workshops for school students under AXIS.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2025",
    title: "Future Goals",
    description:
      "Aiming for high-impact internships, open-source contributions, and building my startup.",
    icon: <FaTrophy />,
  },
];

const Timeline = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`relative py-16 px-4 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-gradient-to-b from-green-50 to-white text-gray-900"
      }`}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-[-50px] left-[-70px] w-[200px] h-[200px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #3b82f6, #8b5cf6)" // Dark mode violet-blue
            : "linear-gradient(135deg, #34d399, #3b82f6)", // Light mode green-blue
        }}
      ></div>
      <div
        className="absolute bottom-[-50px] right-[-70px] w-[200px] h-[200px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" // Dark mode violet-blue
            : "linear-gradient(135deg, #6ee7b7, #60a5fa)", // Light mode green-blue
        }}
      ></div>

      {/* Heading */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
          darkMode
            ? "bg-gradient-to-r from-violet-500 to-blue-400 text-transparent bg-clip-text"
            : "bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text"
        }`}
      >
        My Journey
      </h1>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 h-full border-l ${
            darkMode ? "border-violet-600" : "border-green-400"
          }`}
        ></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`relative p-4 rounded-xl w-56 shadow-lg backdrop-blur-lg border ${
                darkMode
                  ? "bg-gradient-to-br from-black to-blue-800/10 border-white/20"
                  : "bg-white border-green-200"
              }`}
            >
              {/* Icon */}
              <div
                className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md text-sm ${
                  darkMode
                    ? "bg-gradient-to-r from-violet-500 to-blue-500"
                    : "bg-gradient-to-r from-green-400 to-blue-400"
                }`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h2
                className={`text-md font-bold text-center mt-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {item.year}
              </h2>
              <h3
                className={`text-sm font-semibold text-center ${
                  darkMode ? "text-violet-200" : "text-green-600"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-xs mt-1 text-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
