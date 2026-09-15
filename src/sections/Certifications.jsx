import { Award, ExternalLink } from "lucide-react";
import certifications from "../data/certifications.js";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Certifications.css";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="container">
        <SectionHeading kicker="Certifications" title="Certifications & courses" />

        <ol className="cert-timeline">
          {certifications.map((cert) => {
            const hasRealUrl = cert.url && cert.url !== "YOUR_CERTIFICATE_URL";
            return (
              <li key={`${cert.title}-${cert.date}`} className="cert-item">
                <div className="cert-marker">
                  <Award size={14} />
                </div>
                <div className="card cert-card">
                  <div className="cert-card-head">
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                    <span className="tag mono">{cert.date}</span>
                  </div>
                  <a
                    href={hasRealUrl ? cert.url : undefined}
                    target={hasRealUrl ? "_blank" : undefined}
                    rel={hasRealUrl ? "noreferrer" : undefined}
                    className={`cert-link ${!hasRealUrl ? "cert-link-disabled" : ""}`}
                    aria-disabled={!hasRealUrl}
                    title={hasRealUrl ? "View certificate" : "Add your certificate link in certifications.js"}
                  >
                    <ExternalLink size={13} />
                    View certificate
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
