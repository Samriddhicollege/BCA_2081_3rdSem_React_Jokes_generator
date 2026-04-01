import { useState, useEffect } from "react";

export function GlitchText({ text, color = "#00ffcc" }) {
  const [g, setG] = useState(false);
  useEffect(() => {
    const id = setInterval(() => { setG(true); setTimeout(() => setG(false), 100); }, 2800 + Math.random() * 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{
      display: "inline-block", color,
      textShadow: g ? `0 0 10px ${color}, 2px 0 #ff0033, -2px 0 #00ffff` : `0 0 8px ${color}88`,
      transform: g ? `skewX(${(Math.random()-0.5)*8}deg)` : "none",
      transition: "none",
    }}>{text}</span>
  );
}
