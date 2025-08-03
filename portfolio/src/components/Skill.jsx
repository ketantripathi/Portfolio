import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import js from "../assets/javascript.svg";
import mongo from "../assets/mongodb.svg";
import exp from "../assets/expressjs.svg";
import reactLogo from "../assets/react.svg";
import node from "../assets/node-js.svg";
import figma from "../assets/figma.svg";
import illustrator from "../assets/adobe-illustrator.svg";
import { useTheme } from "./ThemeContext";

const Skill = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const { darkMode } = useTheme(); 

  cardsRef.current = [];

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "HTML", percent: 95, icon: html },
        { name: "CSS", percent: 90, icon: css },
        { name: "JavaScript", percent: 80, icon: js },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "MongoDB", percent: 70, icon: mongo },
        { name: "ExpressJS", percent: 80, icon: exp },
        { name: "React JS", percent: 75, icon: reactLogo },
        { name: "Node JS", percent: 65, icon: node },
      ],
    },
    {
      category: "Design",
      items: [
        { name: "Figma", percent: 60, icon: figma },
        { name: "Illustrator", percent: 50, icon: illustrator },
      ],
    },
  ];

  // Add refs for multiple cards
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Entry animation
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    // Progress bars animate
    gsap.utils.toArray(".progress-bar").forEach((bar) => {
      const percent = bar.getAttribute("data-percent");
      gsap.fromTo(
        bar,
        { width: "0%" },
        { width: `${percent}%`, duration: 1.2, ease: "power2.out", delay: 0.5 }
      );
    });

    // Mouse parallax for cards
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 40;
      const moveY = (clientY - centerY) / 40;

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          x: moveX * (i + 1) * 0.5,
          y: moveY * (i + 1) * 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      // Blobs parallax (reverse direction for contrast)
      const blobs = sectionRef.current.querySelectorAll(".bg-blob");
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          x: -moveX * (i + 1) * 3,
          y: -moveY * (i + 1) * 3,
          duration: 0.5,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full py-16 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-b from-green-50 to-white text-gray-900"
      }`}
    >
      {/* Background Blobs */}
      <div
        className="bg-blob absolute top-[-80px] right-[-60px] w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{
          background: darkMode
            ? "radial-gradient(circle, #3b82f6, #8b5cf6)" // Blue-Violet for dark
            : "radial-gradient(circle, #34d399, #3b82f6)", // Green-Blue for light
        }}
      ></div>
      <div
        className="bg-blob absolute bottom-[-100px] left-[-70px] w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: darkMode
            ? "radial-gradient(circle, #4f46e5, #1e3a8a)" // Indigo for dark
            : "radial-gradient(circle, #6ee7b7, #60a5fa)", // Mint-Blue for light
        }}
      ></div>

      {/* Title */}
      <h1
        className={`text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent ${
          darkMode
            ? "bg-gradient-to-r from-violet-400 to-blue-400"
            : "bg-gradient-to-r from-green-500 to-blue-500"
        }`}
      >
        My Skills
      </h1>

      {/* Skill Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {skills.map((group, index) => (
          <div
            key={index}
            ref={addToRefs}
            className={`skill-card relative w-full md:w-1/3 p-6 rounded-2xl border transition-transform backdrop-blur-md shadow-lg
              ${
                darkMode
                  ? "bg-black/30 border-violet-600/40 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                  : "bg-white/60 border-green-400/40 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-violet-300" : "text-green-600"
              }`}
            >
              {group.category}
            </h2>
            <div className="space-y-4">
              {group.items.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <div className="flex-1">
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </p>
                    <div
                      className={`w-full h-2 rounded-full mt-1 ${
                        darkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`progress-bar h-2 rounded-full ${
                          darkMode
                            ? "bg-gradient-to-r from-blue-400 to-violet-500"
                            : "bg-gradient-to-r from-green-400 to-blue-500"
                        }`}
                        data-percent={skill.percent}
                      ></div>
                    </div>
                  </div>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-violet-400" : "text-green-500"
                    }`}
                  >
                    {skill.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
