export function Scanlines() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999,
      backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,180,0.018) 2px,rgba(0,255,180,0.018) 4px)",
    }} />
  );
}
