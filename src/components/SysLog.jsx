import { useRef, useEffect } from "react";

export function SysLog({ logs }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [logs]);
  return (
    <div ref={ref} style={{ height: "100%", overflowY: "auto", padding: "6px 4px" }}>
      {logs.map((l, i) => (
        <div key={i} style={{
          fontFamily: "'Courier New', monospace", fontSize: "0.65rem", lineHeight: "1.8",
          color: l.t === "err" ? "#ff2255" : l.t === "warn" ? "#ffcc00" : "#00ffcc",
          opacity: i < logs.length - 10 ? 0.28 : (i < logs.length - 5 ? 0.6 : 1),
        }}>
          <span style={{ color: "#2a2a2a", marginRight: "6px" }}>[{l.time}]</span>{l.msg}
        </div>
      ))}
    </div>
  );
}
