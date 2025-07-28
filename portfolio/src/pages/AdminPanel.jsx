import React from "react";
import { useState,useEffect } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AdminPanel = () => {
  //eslint-disable-next-line
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/protected", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white p-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
      ></div>
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
      ></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text mb-4">
          Admin Dashboard
        </h1>
        <p className="text-gray-300 mb-6">
          Welcome to the Admin Panel. Manage your portfolio content here.
        </p>

        {/* Placeholder buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-700 transition">
            Manage Projects
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Manage Blogs
          </button>
        </div>

        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 right-6 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AdminPanel;
