import { useState } from "react";

export function NeonBtn({ onClick, children, color = "#00ffcc", variant = "outline", disabled = false, full = false }) {
  const [hov, setHov] = useState(false);
  const isSolid = variant === "solid";
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: isSolid ? (hov ? color + "dd" : color + "cc") : (hov ? color + "18" : "transparent"),
        border: `1.5px solid ${disabled ? color + "25" : hov ? color : color + "60"}`,
        color: isSolid ? "#000" : (disabled ? color + "30" : color),
        fontFamily: "'Courier New', monospace",
        fontSize: "0.72rem", fontWeight: isSolid ? "700" : "400",
        padding: "9px 20px", cursor: disabled ? "not-allowed" : "pointer",
        textTransform: "uppercase", letterSpacing: "2px",
        boxShadow: hov && !disabled ? `0 0 18px ${color}44, inset 0 0 12px ${color}11` : "none",
        transition: "all 0.18s ease",
        width: full ? "100%" : "auto",
        whiteSpace: "nowrap",
      }}
    >{children}</button>
  );
}
