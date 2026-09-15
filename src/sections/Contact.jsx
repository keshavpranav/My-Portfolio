import { Mail, Linkedin, Github } from "lucide-react";
import siteConfig from "../data/siteConfig.js";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <SectionHeading
          kicker="Contact"
          title="Get in touch"
          sub="Open to Cloud Engineering, DevOps and software development roles and conversations."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-name">{siteConfig.name}</h3>
            <div className="contact-info-links">
              <a href={`mailto:${siteConfig.email}`} className="contact-info-link">
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact-info-link">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-info-link">
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          <div className="card contact-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
