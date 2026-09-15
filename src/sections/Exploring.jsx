import { Compass } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { useReveal } from "../hooks/useReveal.js";
import "./Exploring.css";

const TOPICS = [
  "Advanced AWS architecture",
  "Cloud monitoring",
  "Docker and containerization",
  "DevOps practices",
  "Scalable application deployment",
  "Backend development",
  "Cloud security fundamentals",
];

export default function Exploring() {
  const ref = useReveal();

  return (
    <section className="section exploring" ref={ref}>
      <div className="container">
        <SectionHeading kicker="Growth" title="Currently exploring" />
        <ul className="exploring-list">
          {TOPICS.map((topic) => (
            <li key={topic} className="exploring-item">
              <Compass size={14} />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
