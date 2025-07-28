import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  console.log(ADMIN_EMAIL);
  console.log(ADMIN_PASSWORD);
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

// Verify token middleware
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: "Welcome Admin!" });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
