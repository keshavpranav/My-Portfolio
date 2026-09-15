import { useMemo, useState } from "react";
import projects, { featuredProject, filterOptions } from "../data/projects.js";
import SectionHeading from "../components/SectionHeading.jsx";
import FeaturedProject from "../components/FeaturedProject.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Projects.css";

export default function Projects() {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <SectionHeading
          kicker="Projects"
          title="Selected work"
          sub="Cloud, backend and full-stack projects — built to practice real deployment, data and infrastructure workflows."
        />

        <FeaturedProject project={featuredProject} />

        <div className="projects-filters" role="group" aria-label="Filter projects by category">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`projects-filter ${filter === opt ? "projects-filter-active" : ""}`}
              onClick={() => setFilter(opt)}
              aria-pressed={filter === opt}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
