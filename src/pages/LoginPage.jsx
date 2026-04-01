import { useState, useEffect } from "react";
import { BOOT_MSGS, COURSES } from "../constants";
import { Scanlines } from "../components/Scanlines";
import { GlitchText } from "../components/GlitchText";
import { NeonBtn } from "../components/NeonBtn";
import { SysLog } from "../components/SysLog";

export function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState("");
  const [logs, setLogs] = useState([]);
  const [logIdx, setLogIdx] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const now = () => new Date().toLocaleTimeString("en-GB", { hour12: false });

  useEffect(() => {
    if (logIdx < BOOT_MSGS.length) {
      const t = setTimeout(() => {
        setLogs(p => [...p, { ...BOOT_MSGS[logIdx], time: now() }]);
        setLogIdx(i => i + 1);
      }, 480 + Math.random() * 280);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setReady(true), 300);
    }
  }, [logIdx]);

  const doLogin = () => {
    if (!username.trim()) { setError("⚠ No username. Who ARE you?"); return; }
    if (!course) { setError("⚠ Select your course so I know where to aim."); return; }
    onLogin(username.trim().toUpperCase(), course);
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#030303",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Courier New', monospace", padding: "20px",
    }}>
      <Scanlines />
      <div style={{ width: "100%", maxWidth: "520px", position: "relative", zIndex: 1 }}>

        {/* ── Title ── */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ color: "#ffffff18", fontSize: "0.58rem", letterSpacing: "8px", marginBottom: "10px" }}>
            ANTHROPIC ROGUE DIVISION · BUILD 3.0
          </div>
          <h1 style={{ margin: 0, fontWeight: "normal", fontSize: "clamp(1.6rem,5vw,2.4rem)", letterSpacing: "5px" }}>
            <GlitchText text="AI GONE WRONG" color="#00ffcc" />
          </h1>
          <div style={{ marginTop: "8px", color: "#00ffcc33", fontSize: "0.65rem", letterSpacing: "4px" }}>
            v3.0 · INITIALIZING ROAST ENGINE
          </div>
        </div>

        {/* ── Boot log ── */}
        <div style={{
          background: "#0a0a0a", border: "1px solid #00ffcc15",
          height: "170px", padding: "10px 12px", marginBottom: "28px", overflowY: "auto",
        }}>
          <SysLog logs={logs} />
        </div>

        {/* ── Form ── */}
        {ready && (
          <div style={{ animation: "slideUp 0.4s ease" }}>

            {/* Username */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#00ffcc77", fontSize: "0.6rem", letterSpacing: "3px", marginBottom: "8px" }}>
                &gt; ENTER YOUR USERNAME
              </label>
              <input
                value={username}
                onChange={e => { setUsername(e.target.value); setError(""); }}
                onKeyDown={e => e.key === "Enter" && doLogin()}
                placeholder="e.g. RAMESH, HACKER_BOY, ANONYMOUS..."
                style={{
                  width: "100%", boxSizing: "border-box",
                  background: "#0d0d0d", border: "1.5px solid #00ffcc30",
                  color: "#00ffcc", fontFamily: "'Courier New', monospace",
                  fontSize: "0.9rem", padding: "12px 16px", outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "#00ffcc88"}
                onBlur={e => e.target.style.borderColor = "#00ffcc30"}
              />
            </div>

            {/* Course selection */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", color: "#00ffcc77", fontSize: "0.6rem", letterSpacing: "3px", marginBottom: "10px" }}>
                &gt; SELECT YOUR COURSE (I'LL AIM HERE)
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {COURSES.map(c => {
                  const sel = course === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => { setCourse(c.id); setError(""); }}
                      style={{
                        background: sel ? c.color + "18" : "#0d0d0d",
                        border: `1.5px solid ${sel ? c.color : "#ffffff15"}`,
                        color: sel ? c.color : "#888",
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.78rem", padding: "14px 12px",
                        cursor: "pointer", textAlign: "left",
                        letterSpacing: "1px", transition: "all 0.18s",
                        boxShadow: sel ? `0 0 14px ${c.color}25, inset 0 0 14px ${c.color}08` : "none",
                        display: "flex", alignItems: "center", gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                      <div>
                        <div style={{ fontWeight: sel ? "bold" : "normal", fontSize: "0.78rem" }}>{c.label}</div>
                        {sel && <div style={{ fontSize: "0.58rem", color: c.color + "88", marginTop: "2px" }}>SELECTED ✓</div>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{ color: "#ff2255", fontSize: "0.7rem", marginBottom: "14px", textShadow: "0 0 8px #ff225544", padding: "8px 12px", border: "1px solid #ff225522", background: "#ff225508" }}>
                {error}
              </div>
            )}

            <NeonBtn onClick={doLogin} color="#00ffcc" variant="solid" full>
              ▶ ACCESS SYSTEM
            </NeonBtn>

            <div style={{ color: "#1e1e1e", fontSize: "0.55rem", marginTop: "14px", textAlign: "center", letterSpacing: "1px", lineHeight: "1.8" }}>
              BY ENTERING YOU CONSENT TO EMOTIONAL DAMAGE · NO REFUNDS · NO THERAPY PROVIDED
            </div>
          </div>
        )}

        <style>{`
          @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        `}</style>
      </div>
    </div>
  );
}
