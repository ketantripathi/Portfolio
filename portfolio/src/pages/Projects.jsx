// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projectsData";

const categories = ["All", "Web Development", "UI/UX", "Machine Learning","Logo Design"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect for carousel
  useEffect(() => {
    if (!selectedProject) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        (prev + 1) % selectedProject.images.length
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-violet-500 to-blue-400 text-transparent bg-clip-text">
        My Projects
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-violet-500 to-blue-500 border-transparent"
                : "border-gray-500 hover:border-violet-400"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0); // reset carousel
              }}
              className="cursor-pointer bg-gradient-to-br from-black via-gray-950 to-black p-5 rounded-2xl shadow-lg border border-violet-600 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-gray-300 hover:text-white text-3xl"
            >
              ✕
            </button>

            {/* Project Title */}
            <h2 className="text-3xl font-bold mb-4 text-center">
              {selectedProject.title}
            </h2>

            {/* Carousel */}
            <div className="relative w-full max-w-3xl h-64 sm:h-96 mb-6">
              <motion.img
                key={currentImageIndex}
                src={selectedProject.images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-xl border border-gray-700"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />

              {/* Prev Button */}
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + selectedProject.images.length) %
                      selectedProject.images.length
                  )
                }
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 rounded-full p-2"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex + 1) % selectedProject.images.length
                  )
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700 rounded-full p-2"
              >
                ›
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-center mb-4 px-4">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
