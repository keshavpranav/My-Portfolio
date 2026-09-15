import { Github, ExternalLink, Star } from "lucide-react";
import FlowDiagram from "./FlowDiagram.jsx";

export default function FeaturedProject({ project }) {
  const hasRealRepo = project.github && project.github !== "YOUR_GITHUB_URL";

  return (
    <article className="card featured-project">
      <div className="featured-project-tag">
        <Star size={13} />
        Featured project
      </div>

      <div className="featured-project-grid">
        <div className="featured-project-copy">
          <div className="featured-project-head">
            <h3 className="featured-project-title">{project.title}</h3>
            <span className="tag mono">{project.date}</span>
          </div>
          <p className="featured-project-subtitle">{project.subtitle}</p>
          <p className="featured-project-desc">{project.description}</p>

          <ul className="featured-project-features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="featured-project-stack">
            {project.stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="featured-project-links">
            <a
              href={hasRealRepo ? project.github : undefined}
              target={hasRealRepo ? "_blank" : undefined}
              rel={hasRealRepo ? "noreferrer" : undefined}
              className="btn btn-secondary"
              aria-disabled={!hasRealRepo}
              title={hasRealRepo ? "View source on GitHub" : "Add your repository link in projects.js"}
            >
              <Github size={15} />
              {hasRealRepo ? "View code" : "Add GitHub link"}
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <ExternalLink size={15} />
                Live demo
              </a>
            )}
          </div>
        </div>

        <div className="featured-project-diagram">
          <FlowDiagram />
        </div>
      </div>
    </article>
  );
}
