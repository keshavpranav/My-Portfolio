import skillGroups from "../data/skills.js";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <SectionHeading
          kicker="Skills"
          title="Technical skills"
          sub="Technologies I've worked with across cloud infrastructure, DevOps and software development."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="card skills-card">
              <h3 className="skills-card-title">{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
