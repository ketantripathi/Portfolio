import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Submit form to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div
      className={`relative w-full py-16 px-6 md:px-20 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-b from-green-50 to-white text-gray-900"
      }`}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-100px] left-[-120px] w-[250px] h-[250px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
            : "linear-gradient(135deg, #34d399, #3b82f6)",
        }}
      ></div>
      <div
        className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #8b5cf6, #3b82f6)"
            : "linear-gradient(135deg, #6ee7b7, #60a5fa)",
        }}
      ></div>

      {/* Heading */}
      <h1
        className={`text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent ${
          darkMode
            ? "bg-gradient-to-r from-violet-500 to-blue-400"
            : "bg-gradient-to-r from-green-500 to-blue-500"
        }`}
      >
        Get in Touch
      </h1>

      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center justify-center relative z-10">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`w-full md:w-2/5 rounded-2xl p-6 flex flex-col gap-5 shadow-lg border transition-colors duration-500 ${
            darkMode
              ? "bg-gradient-to-br from-black via-gray-950/80 to-black border-gray-700"
              : "bg-white/70 border-green-400/40 backdrop-blur-md"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-transparent border-gray-700 focus:ring-violet-500"
                  : "bg-white border-green-300 focus:ring-green-400"
              }`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-transparent border-gray-700 focus:ring-blue-500"
                  : "bg-white border-green-300 focus:ring-green-400"
              }`}
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label htmlFor="mobile" className="mb-1 text-sm font-semibold">
              Mobile No.
            </label>
            <input
              type="tel"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={`p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-transparent border-gray-700 focus:ring-violet-500"
                  : "bg-white border-green-300 focus:ring-green-400"
              }`}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-transparent border-gray-700 focus:ring-blue-500"
                  : "bg-white border-green-300 focus:ring-green-400"
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`mt-2 p-3 rounded-xl font-bold transition-all duration-300 border-2 ${
              darkMode
                ? "border-violet-600 hover:border-blue-600"
                : "border-green-500 hover:border-blue-500"
            }`}
          >
            Send Message
          </motion.button>

          {/* Status Message */}
          {status && <p className="text-sm mt-2">{status}</p>}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-2/5 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt
              className={darkMode ? "text-violet-400" : "text-green-500"}
              size={22}
            />
            <span>VNIT Nagpur, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt
              className={darkMode ? "text-blue-400" : "text-green-600"}
              size={22}
            />
            <span>+91 7879412384</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope
              className={darkMode ? "text-violet-400" : "text-green-500"}
              size={22}
            />
            <span>ketantripathi807@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub
              className={darkMode ? "text-blue-400" : "text-green-600"}
              size={22}
            />
            <a
              href="https://github.com/ketantripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/ketantripathi
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin
              className={darkMode ? "text-violet-400" : "text-green-500"}
              size={22}
            />
            <a
              href="https://www.linkedin.com/in/ketan-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/ketan-tripathi
            </a>
          </div>

          {/* Resume Link */}
          <div className="flex items-center gap-3 mt-4">
            <FaFilePdf className="text-red-400" size={22} />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-semibold border-2 transition-all ${
                darkMode
                  ? "border-white hover:border-violet-600"
                  : "border-green-500 hover:border-blue-500"
              }`}
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
