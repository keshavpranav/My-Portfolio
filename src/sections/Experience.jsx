import { CheckCircle2 } from "lucide-react";
import experience from "../data/experience.js";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Experience.css";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <SectionHeading kicker="Experience" title="Internship" />

        <div className="experience-list">
          {experience.map((role) => (
            <div key={role.company} className="experience-item">
              <div className="experience-rail">
                <span className="experience-dot" />
                <span className="experience-line" />
              </div>

              <div className="card experience-card">
                <div className="experience-head">
                  <div>
                    <h3 className="experience-role">{role.role}</h3>
                    <p className="experience-company">{role.company}</p>
                  </div>
                  <span className="tag experience-period mono">{role.period}</span>
                </div>

                <p className="experience-summary">{role.summary}</p>

                <ul className="experience-highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>
                      <CheckCircle2 size={14} className="experience-check" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-stack">
                  {role.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
