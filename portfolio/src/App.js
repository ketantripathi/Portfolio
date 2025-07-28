import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SpotlightCursor from './components/SpotlightCursor'
// Pages
import Home from "./pages/Home";
import LogoDesign from "./pages/LogoDesign";
import UIUX from "./pages/UIUX";
import GraphicDesign from "./pages/GraphicDesign";
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import Projects from './pages/Projects'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  const [navbarColor, setNavbarColor] = useState("");

  const handleScroll = () => {
    const scrollRatio =
      window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    setNavbarColor(scrollRatio > 0.1 ? "black" : "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="w-full m-0 p-0">
        <SpotlightCursor />
        <Navbar navbarColor={navbarColor} />
        <Routes>
          <Route path="/" element={<Home navbarColor={navbarColor} />} />
          <Route path="/projects" element={<Projects navbarColor={navbarColor} />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/ui-ux" element={<UIUX />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
