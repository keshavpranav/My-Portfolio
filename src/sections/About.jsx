import siteConfig from "../data/siteConfig.js";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <SectionHeading kicker="About" title="Background" />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm an Information Technology student at {siteConfig.education.institution},
              working toward a career in cloud engineering. During an internship as an{" "}
              <strong>AWS Cloud Engineer Intern at Knowtifics</strong>, I worked hands-on with
              core AWS services — EC2, RDS, S3, CloudFront, ELB, Auto Scaling and CloudWatch —
              to deploy, configure and monitor cloud-based applications.
            </p>
            <p>
              Alongside cloud infrastructure, I've built and deployed software projects spanning
              backend development, relational databases and web applications, using Python,
              Java, JavaScript and SQL. I've worked with Docker for containerized workflows and
              operate comfortably in Linux/Ubuntu environments for day-to-day development and
              deployment.
            </p>
            <p>
              I'm currently exploring more advanced AWS architecture patterns, cloud monitoring
              and DevOps practices, with the goal of building infrastructure that's not just
              functional, but scalable and production-ready.
            </p>
          </div>

          <aside className="about-facts card">
            <FactRow label="Focus" value="Cloud Engineering, AWS" />
            <FactRow label="Institution" value={siteConfig.education.institution} />
            <FactRow label="Program" value={siteConfig.education.degree} />
            <FactRow label="Internship" value="AWS Cloud Engineer Intern, Knowtifics" />
            <FactRow label="Based in" value={siteConfig.location} />
          </aside>
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }) {
  return (
    <div className="about-fact">
      <span className="about-fact-label mono">{label}</span>
      <span className="about-fact-value">{value}</span>
    </div>
  );
}
