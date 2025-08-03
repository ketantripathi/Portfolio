import React from "react";
import illustration from "../assets/about-illustration.svg";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { darkMode } = useTheme(); // Access global theme

  return (
    <div id="about"
      className={`relative w-full py-16 px-6 md:px-20 transition-colors duration-500 overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-green-50 text-gray-900"
      }`}
    >
      {/* Large Gradient Blobs (Swapped Positions) */}
      <div
        className="absolute top-[-150px] right-[-100px] w-[300px] h-[200px] rounded-full blur-3xl opacity-20"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #3b82f6, #8b5cf6)" // violet-blue for dark mode
            : "linear-gradient(135deg, #34d399, #3b82f6)", // green-blue for light mode
        }}
      ></div>
      <div
        className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
            : "linear-gradient(135deg, #6ee7b7, #60a5fa)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          data-aos="fade-up"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h1>
          <p className={`text-lg md:text-xl ${darkMode? 'text-gray-300' :'text-gray-900'} leading-relaxed`}>
            Hi, I'm{" "}
            <span
              className={`bg-clip-text text-transparent font-semibold ${
                darkMode
                  ? "bg-gradient-to-r from-violet-500 to-blue-500"
                  : "bg-gradient-to-r from-green-500 to-blue-500"
              }`}
            >
              Ketan Tripathi
            </span>
            , a Final-year Computer Science Engineering student at VNIT, Nagpur,
            passionate about building scalable digital solutions. With expertise
            in the MERN stack and a keen interest in blockchain development and
            Web3, I aim to create innovative and impactful applications.
            <br />
            <br />
            I'm actively working toward becoming a full-stack developer, with
            plans to develop platforms that integrate cutting-edge technologies
            like AI, trading systems, and blockchain. My vision includes
            launching a dropservicing business in website development and
            creating solutions that bridge technology and real-world needs.
            <br />
            <br />
            Driven by growth and leadership, I'm constantly learning and
            adapting to stay ahead in the tech industry. Let's collaborate to
            shape the future of technology!
          </p>
        </div>

        {/* Illustration Section */}
        <div
          className="md:w-1/2 flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            className={`w-3/4 max-w-md rounded-2xl transition-transform duration-500 hover:scale-105 ${
              darkMode
                ? "hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.6)]"
                : "hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
            }`}
            src={illustration}
            alt="About Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
