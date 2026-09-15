import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasRealRepo = project.github && project.github !== "YOUR_GITHUB_URL";

  return (
    <article className="card project-card">
      <div className="project-card-head">
        <h3 className="project-card-title">{project.title}</h3>
        {project.date && <span className="tag project-card-date mono">{project.date}</span>}
      </div>

      <p className="project-card-desc">{project.description}</p>

      {project.features.length > 0 && (
        <ul className="project-card-features">
          {project.features.slice(0, 4).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      <div className="project-card-stack">
        {project.stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-card-links">
        <a
          href={hasRealRepo ? project.github : undefined}
          target={hasRealRepo ? "_blank" : undefined}
          rel={hasRealRepo ? "noreferrer" : undefined}
          className={`project-card-link ${!hasRealRepo ? "project-card-link-disabled" : ""}`}
          aria-disabled={!hasRealRepo}
          title={hasRealRepo ? "View source on GitHub" : "Add your repository link in projects.js"}
        >
          <Github size={14} />
          {hasRealRepo ? "Code" : "Add GitHub link"}
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-card-link">
            <ExternalLink size={14} />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
