// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import TimeLine from "../components/TimeLine";
import Expertise from "../components/Expertise";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Footer from '../components/Footer'
export default function Home({ navbarColor }) {
  return (
    <>
      <div id="Home">
        <Hero />
        <About />
        <TimeLine/>
        {/* <Skills /> */}
        <Expertise />
        <Skill />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
