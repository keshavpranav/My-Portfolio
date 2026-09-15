import { GraduationCap } from "lucide-react";
import siteConfig from "../data/siteConfig.js";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <SectionHeading kicker="Education" title="Education" />

        <div className="card education-card">
          <div className="education-icon">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 className="education-degree">{siteConfig.education.degree}</h3>
            <p className="education-institution">{siteConfig.education.institution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
