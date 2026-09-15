import { Cloud, Code2, Boxes, Puzzle } from "lucide-react";
import { summaryCards } from "../data/skills.js";
import "./Summary.css";

const ICONS = {
  "Cloud Engineering": Cloud,
  Development: Code2,
  DevOps: Boxes,
  "Problem Solving": Puzzle,
};

export default function Summary() {
  return (
    <section className="summary">
      <div className="container summary-grid">
        {summaryCards.map((card) => {
          const Icon = ICONS[card.title];
          return (
            <div key={card.title} className="card summary-card">
              <Icon size={19} className="summary-icon" />
              <h3 className="summary-title">{card.title}</h3>
              <p className="summary-desc">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
