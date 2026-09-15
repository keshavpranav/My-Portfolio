import { Linkedin, Github, Mail, Download } from "lucide-react";
import siteConfig from "../data/siteConfig.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{siteConfig.name}</p>
          <p className="footer-title">{siteConfig.title}</p>
        </div>

        <div className="footer-links">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
          <a href={siteConfig.resume} download aria-label="Download resume">
            <Download size={17} />
          </a>
        </div>

        <p className="footer-copyright">© 2026 {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
