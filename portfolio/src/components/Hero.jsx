import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/profile.png";
import { useTheme } from "./ThemeContext";

function Hero() {
  const el = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "UI/UX Designer", "Logo Creator", "Video Editor"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div
      className={`relative w-full h-screen flex justify-center items-center overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-yellow-50 via-white to-blue-50 text-gray-900"
      }`}
    >
      {/* Decorative Blobs */}
      <div
        className={`absolute top-[-200px] left-[-150px] w-[400px] h-[400px] rounded-full blur-3xl opacity-30 animate-spin-slow ${
          darkMode
            ? "bg-gradient-to-br from-violet-500 to-blue-500"
            : "bg-gradient-to-br from-green-300 to-yellow-300"
        }`}
      ></div>

      <div
        className={`absolute bottom-[-200px] right-[-150px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30 animate-spin-slower ${
          darkMode
            ? "bg-gradient-to-br from-blue-500 to-pink-500"
            : "bg-gradient-to-br from-green-300 to-violet-300"
        }`}
      ></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-16 z-10 px-6 text-center md:text-left">
        {/* Text Section */}
        <div className="max-w-lg space-y-4 transition-colors duration-500">
          <h1 className="text-5xl font-extrabold">
            Hi, I’m{" "}
            <span className={`bg-clip-text text-transparent ${
                darkMode
                  ? "bg-gradient-to-r from-violet-500 to-blue-500"
                  : "bg-gradient-to-r from-green-500 to-blue-500"
              }`}>
              Ketan Tripathi
            </span>
          </h1>
          <h2 className="text-3xl font-semibold">
            I’m a{" "}
            <span
              ref={el}
              className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode?  'from-green-400' : 'from-violet-500'} to-blue-400`}
            />
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Creating immersive digital experiences that merge creativity and
            technology.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative transition-all duration-500">
          <div
            className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${
              darkMode
                ? "bg-gradient-to-r from-violet-500 to-blue-500"
                : "bg-gradient-to-r from-pink-300 to-yellow-300"
            }`}
          ></div>
          <img
            src={profile}
            alt="Profile"
            className="relative w-64 h-64 object-cover rounded-full border-4 border-violet-500 shadow-2xl animate-float"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
