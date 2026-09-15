import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import siteConfig from "../data/siteConfig.js";
import HeroDiagram from "../components/HeroDiagram.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-dot">{siteConfig.availability}</span>

          <h1 className="hero-name">{siteConfig.name}</h1>
          <p className="hero-title">
            {siteConfig.title}
            <span className="hero-title-secondary"> — Aspiring Cloud Engineer</span>
          </p>

          <p className="hero-statement">{siteConfig.statement}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects
              <ArrowRight size={15} />
            </a>
            <a href={siteConfig.resume} download className="btn btn-secondary">
              <Download size={15} />
              Download resume
            </a>
          </div>

          <div className="hero-links">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="hero-link"
              aria-label="GitHub profile"
            >
              <Github size={16} />
              GitHub
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hero-link" aria-label="Send an email">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}
