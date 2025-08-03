// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import TimeLine from "../components/TimeLine";
import Expertise from "../components/Expertise";
import Skill from "../components/Skill";
import Projects from "./Projects";
import Contact from "../components/Contact";
import Footer from '../components/Footer'
export default function Home({ navbarColor }) {
  return (
    <>
      <div id="Home">
        <Hero />
        <About />
        <TimeLine/>
        <Expertise />
        <Skill />
        <Projects /> 
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
