import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data)
    if (!response.ok) {
      // Handle server errors (like invalid credentials)
      setError(data.message || "Login failed");
      return;
    }

    // Save JWT token securely in localStorage
    localStorage.setItem("token", data.token);

    // Navigate to Admin Panel
    navigate("/admin");
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-600 via-black to-blue-600">
      <div className="w-full max-w-md bg-black/70 backdrop-blur-lg p-8 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-violet-600 to-blue-500 p-3 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
