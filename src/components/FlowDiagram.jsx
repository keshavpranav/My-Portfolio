import { architectureFlow, architectureSupport } from "../data/cloudServices.js";
import "./FlowDiagram.css";

const MAIN_X = [80, 270, 460, 650, 860];
const SUPPORT_X = [270, 460, 650];
const MAIN_Y = 66;
const SUPPORT_Y = 226;

export default function FlowDiagram() {
  return (
    <div className="flow-diagram card">
      <svg viewBox="0 0 940 300" className="flow-diagram-svg" role="img" aria-label="Architecture diagram: a client request passes through CloudFront, a load balancer and EC2, into an RDS database, supported by S3, CloudWatch and Auto Scaling">
        <defs>
          <marker id="fd-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* main flow connectors */}
        {MAIN_X.slice(0, -1).map((x, i) => (
          <line
            key={i}
            x1={x + 56}
            y1={MAIN_Y}
            x2={MAIN_X[i + 1] - 56}
            y2={MAIN_Y}
            stroke="var(--accent)"
            strokeWidth="1.6"
            markerEnd="url(#fd-arrow)"
          />
        ))}

        {/* support connectors (dashed, vertical) */}
        {SUPPORT_X.map((x, i) => (
          <line
            key={i}
            x1={x}
            y1={SUPPORT_Y - 30}
            x2={x}
            y2={MAIN_Y + 30}
            stroke="var(--border-strong)"
            strokeWidth="1.4"
            strokeDasharray="3 4"
          />
        ))}

        {/* main nodes */}
        {architectureFlow.map((node, i) => (
          <g key={node.code} transform={`translate(${MAIN_X[i]}, ${MAIN_Y})`}>
            <rect x="-54" y="-26" width="108" height="52" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.4" />
            <text textAnchor="middle" y="-4" className="flow-node-label mono">
              {node.code}
            </text>
            <text textAnchor="middle" y="14" className="flow-node-sub">
              {node.label}
            </text>
          </g>
        ))}

        {/* support nodes */}
        {architectureSupport.map((node, i) => (
          <g key={node.code} transform={`translate(${SUPPORT_X[i]}, ${SUPPORT_Y})`}>
            <rect x="-50" y="-22" width="100" height="44" rx="7" fill="var(--surface-2)" stroke="var(--border-strong)" strokeWidth="1.2" />
            <text textAnchor="middle" y="-2" className="flow-node-label-sm mono">
              {node.code}
            </text>
            <text textAnchor="middle" y="14" className="flow-node-sub-sm">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
