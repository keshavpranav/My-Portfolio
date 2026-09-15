import "./HeroDiagram.css";

const NODES = [
  { key: "client", label: "Client", sub: "Request", y: 36 },
  { key: "cdn", label: "CloudFront", sub: "Edge cache", y: 132 },
  { key: "lb", label: "Load Balancer", sub: "Traffic routing", y: 228 },
  { key: "ec2", label: "EC2", sub: "Application", y: 324 },
  { key: "rds", label: "RDS", sub: "Database", y: 420 },
];

const CX = 46;

export default function HeroDiagram() {
  return (
    <div className="hero-diagram" role="img" aria-label="Diagram of a request flowing from client through CloudFront, a load balancer and EC2, into an RDS database">
      <svg viewBox="0 0 300 456" className="hero-diagram-svg" aria-hidden="true">
        <defs>
          <pattern id="hd-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--border)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="300" height="456" fill="url(#hd-grid)" opacity="0.5" />

        {/* connecting spine */}
        <line
          x1={CX}
          y1={NODES[0].y}
          x2={CX}
          y2={NODES[NODES.length - 1].y}
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />

        {/* traveling pulse */}
        <circle className="hero-diagram-pulse" cx={CX} cy={NODES[0].y} r="4" fill="var(--accent)" />

        {NODES.map((node, i) => (
          <g key={node.key} className="hero-diagram-node" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
            <circle cx={CX} cy={node.y} r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.6" />
            <circle cx={CX} cy={node.y} r="3" fill="var(--accent)" />
            <text x={CX + 24} y={node.y - 3} className="hero-diagram-label">
              {node.label}
            </text>
            <text x={CX + 24} y={node.y + 14} className="hero-diagram-sub mono">
              {node.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
