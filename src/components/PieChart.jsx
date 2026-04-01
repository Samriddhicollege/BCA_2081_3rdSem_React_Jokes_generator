export function PieChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) {
    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <div style={{ color: "#2a2a2a", fontFamily: "'Courier New', monospace", fontSize: "0.72rem" }}>
          NO ROAST DATA YET<br />
          <span style={{ fontSize: "0.6rem" }}>fire some roasts to see your damage breakdown</span>
        </div>
      </div>
    );
  }

  const cx = 90, cy = 90, r = 72;
  let startAngle = -Math.PI / 2;
  const slices = [];

  data.forEach(d => {
    if (d.value === 0) return;
    const angle = (d.value / total) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    slices.push({
      path: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`,
      color: d.color,
      label: d.label,
      pct: Math.round((d.value / total) * 100),
      midAngle: startAngle + angle / 2,
      value: d.value,
    });
    startAngle = endAngle;
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        {slices.map((s, i) => (
          <path key={i} d={s.path} fill={s.color} stroke="#000" strokeWidth="2" opacity="0.9" />
        ))}
        <circle cx={cx} cy={cy} r="32" fill="#000" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#00ffcc" fontSize="11" fontFamily="Courier New">ROAST</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#00ffcc88" fontSize="9" fontFamily="Courier New">STATS</text>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "12px", height: "12px", background: d.color, flexShrink: 0, boxShadow: `0 0 6px ${d.color}88` }} />
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.7rem" }}>
              <span style={{ color: d.color }}>{d.label}</span>
              <span style={{ color: "#444", marginLeft: "8px" }}>{d.value} roast{d.value !== 1 ? "s" : ""}</span>
              <span style={{ color: "#333", marginLeft: "6px" }}>({total > 0 ? Math.round((d.value / total) * 100) : 0}%)</span>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #ffffff0a", paddingTop: "8px", fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "#444" }}>
          TOTAL DAMAGE: <span style={{ color: "#ff2255" }}>{total} roast{total !== 1 ? "s" : ""}</span>
        </div>
      </div>
    </div>
  );
}
