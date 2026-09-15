import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Summary from "./sections/Summary.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Cloud from "./sections/Cloud.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Certifications from "./sections/Certifications.jsx";
import Education from "./sections/Education.jsx";
import Exploring from "./sections/Exploring.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <About />
        <Skills />
        <Cloud />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
