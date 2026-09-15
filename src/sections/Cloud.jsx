import cloudServices from "../data/cloudServices.js";
import SectionHeading from "../components/SectionHeading.jsx";
import FlowDiagram from "../components/FlowDiagram.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Cloud.css";

export default function Cloud() {
  const ref = useReveal();

  return (
    <section id="cloud" className="section cloud" ref={ref}>
      <div className="container">
        <SectionHeading
          kicker="AWS"
          title="Cloud Engineering"
          sub="Practical, hands-on exposure to AWS infrastructure, deployment, monitoring and cloud-based applications."
        />

        <div className="cloud-services-grid">
          {cloudServices.map((service) => (
            <div key={service.code} className="card cloud-service-card">
              <span className="cloud-service-code mono">{service.code}</span>
              <h3 className="cloud-service-name">{service.name}</h3>
              <p className="cloud-service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="cloud-diagram-block">
          <h3 className="cloud-diagram-title">Reference architecture</h3>
          <p className="cloud-diagram-sub">
            A typical request path through a deployed project — from client to database, with
            supporting services for storage, monitoring and capacity.
          </p>
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}
