export default function SectionHeading({ kicker, title, sub }) {
  return (
    <div className="section-head">
      {kicker && <span className="section-kicker mono">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
