import { useState, useEffect, useRef, useCallback } from "react";
import { COURSES, TIERS, ROASTS, SYS_POOL } from "../constants";
import { Scanlines } from "../components/Scanlines";
import { GlitchText } from "../components/GlitchText";
import { NeonBtn } from "../components/NeonBtn";
import { SysLog } from "../components/SysLog";
import { PieChart } from "../components/PieChart";

export function Dashboard({ username, course, onLogout }) {
  const courseObj = COURSES.find(c => c.id === course) || COURSES[0];
  const now = () => new Date().toLocaleTimeString("en-GB", { hour12: false });

  const [chatLog, setChatLog] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aigw_chat") || "[]"); } catch { return []; }
  });
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aigw_history") || "[]"); } catch { return []; }
  });
  const [sysLogs, setSysLogs] = useState([]);
  const [page, setPage] = useState("dashboard");
  const [selectedTier, setSelectedTier] = useState("mild");
  const [dropOpen, setDropOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => { localStorage.setItem("aigw_chat", JSON.stringify(chatLog)); }, [chatLog]);
  useEffect(() => { localStorage.setItem("aigw_history", JSON.stringify(history)); }, [history]);
  useEffect(() => { if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight; }, [chatLog, typing]);

  useEffect(() => {
    const handler = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const boot = [
      { msg: `"${username}" authenticated. Oh no.`, t: "warn", time: now() },
      { msg: `Course: ${courseObj.label}. Preparing targeted payload...`, t: "ok", time: now() },
      { msg: "3-tier roast system: ARMED", t: "err", time: now() },
      { msg: "Commence emotional damage at your discretion.", t: "warn", time: now() },
    ];
    boot.forEach((m, i) => setTimeout(() => setSysLogs(p => [...p, m]), i * 550));
    const iv = setInterval(() => {
      const pick = SYS_POOL[Math.floor(Math.random() * SYS_POOL.length)];
      setSysLogs(p => [...p.slice(-30), { ...pick, time: now() }]);
    }, 3800);
    return () => clearInterval(iv);
  }, []);

  const handleRoast = useCallback(() => {
    if (typing) return;
    const tier = selectedTier;
    setTyping(true);
    const pool = ROASTS[tier][course] || ROASTS[tier].programmer;
    const delays = { mild: 900, medium: 1350, danger: 1900 };
    setTimeout(() => {
      const text = pool[Math.floor(Math.random() * pool.length)];
      const entry = { text, tier, time: now() };
      setChatLog(p => [...p, entry]);
      setHistory(p => [{ text, tier, course, time: new Date().toLocaleString() }, ...p].slice(0, 50));
      setSysLogs(p => [...p, {
        msg: `[${tier.toUpperCase()}] Direct hit on ${username}.`,
        t: tier === "danger" ? "err" : tier === "medium" ? "warn" : "ok",
        time: now(),
      }]);
      setTyping(false);
    }, delays[tier] + Math.random() * 300);
  }, [typing, selectedTier, course, username]);

  const clearChat = () => { setChatLog([]); localStorage.removeItem("aigw_chat"); };
  const clearAll  = () => { setChatLog([]); setHistory([]); localStorage.removeItem("aigw_chat"); localStorage.removeItem("aigw_history"); };

  const tierObj = TIERS.find(t => t.id === selectedTier);
  const pieData = TIERS.map(t => ({
    label: t.label, color: t.color,
    value: history.filter(h => h.tier === t.id).length,
  }));
  const totalRoasts = history.length;

  const Header = (
    <div style={{
      background: "#050505", borderBottom: "1px solid #ffffff0a",
      padding: "0 20px", display: "flex", alignItems: "center",
      justifyContent: "space-between", height: "54px", flexShrink: 0,
      position: "sticky", top: 0, zIndex: 200, flexWrap: "nowrap", gap: "8px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0 }}>
        <div>
          <span style={{ color: "#ff2255", fontSize: "0.7rem", textShadow: "0 0 8px #ff225566" }}>⚠ UNSTABLE</span>
        </div>
        <div style={{ color: "#333", fontSize: "0.7rem" }}>|</div>
        <div style={{ fontSize: "0.72rem", color: "#00ffcc" }}>
          <GlitchText text={username} color="#00ffcc" />
        </div>
        <div style={{
          fontSize: "0.62rem", color: courseObj.color,
          background: courseObj.color + "12", border: `1px solid ${courseObj.color}30`,
          padding: "3px 10px", whiteSpace: "nowrap",
        }}>
          {courseObj.icon} {courseObj.label}
        </div>
      </div>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <NeonBtn onClick={() => setPage("dashboard")} color={page === "dashboard" ? "#00ffcc" : "#333"}>DASHBOARD</NeonBtn>
        <NeonBtn onClick={() => setPage("profile")}   color={page === "profile"   ? "#00ffcc" : "#333"}>PROFILE</NeonBtn>
        <NeonBtn onClick={onLogout} color="#ff2255">EXIT</NeonBtn>
      </div>
    </div>
  );

  if (page === "dashboard") {
    return (
      <div style={{ minHeight: "100vh", background: "#030303", color: "#00ffcc", display: "flex", flexDirection: "column" }}>
        <Scanlines />
        {Header}

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 0, height: "calc(100vh - 54px)" }}>

          {/* Sidebar */}
          <div style={{ background: "#050505", borderRight: "1px solid #ffffff08", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ padding: "14px 14px 8px", color: "#2a2a2a", fontSize: "0.58rem", letterSpacing: "3px" }}>› SYSTEM LOGS</div>
            <div style={{ flex: 1, overflow: "hidden", padding: "0 10px 10px" }}>
              <SysLog logs={sysLogs} />
            </div>
          </div>

          {/* Main panel */}
          <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>

            {/* ── Roast control strip ── */}
            <div style={{ background: "#070707", borderBottom: "1px solid #ffffff08", padding: "16px 20px", flexShrink: 0 }}>

              {/* Tier dropdown */}
              <div style={{ marginBottom: "14px" }}>
                <div style={{ color: "#555", fontSize: "0.58rem", letterSpacing: "2px", marginBottom: "8px" }}>
                  &gt; SELECT ROAST TIER
                </div>
                <div ref={dropRef} style={{ position: "relative", display: "inline-block", width: "280px" }}>
                  <button
                    onClick={() => setDropOpen(o => !o)}
                    style={{
                      width: "100%", background: "#0d0d0d",
                      border: `1.5px solid ${tierObj.color}60`,
                      color: tierObj.color, fontFamily: "'Courier New', monospace",
                      fontSize: "0.78rem", padding: "11px 16px",
                      cursor: "pointer", textAlign: "left",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      boxShadow: `0 0 12px ${tierObj.color}18`,
                    }}
                  >
                    <span>{tierObj.icon} {tierObj.label} — <span style={{ color: tierObj.color + "88", fontSize: "0.68rem" }}>{tierObj.desc}</span></span>
                    <span style={{ marginLeft: "8px", opacity: 0.6 }}>{dropOpen ? "▲" : "▼"}</span>
                  </button>
                  {dropOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 4px)", left: 0, width: "100%",
                      background: "#0d0d0d", border: "1px solid #ffffff15",
                      zIndex: 300, boxShadow: "0 8px 32px #000a",
                    }}>
                      {TIERS.map(t => (
                        <button
                          key={t.id}
                          onClick={() => { setSelectedTier(t.id); setDropOpen(false); }}
                          style={{
                            width: "100%", background: selectedTier === t.id ? t.color + "14" : "transparent",
                            border: "none", borderBottom: "1px solid #ffffff08",
                            color: t.color, fontFamily: "'Courier New', monospace",
                            fontSize: "0.75rem", padding: "12px 16px", cursor: "pointer",
                            textAlign: "left", transition: "background 0.12s",
                            display: "flex", alignItems: "center", gap: "12px",
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = t.color + "14"}
                          onMouseLeave={e => e.currentTarget.style.background = selectedTier === t.id ? t.color + "14" : "transparent"}
                        >
                          <span style={{ fontSize: "1.1rem" }}>{t.icon}</span>
                          <div>
                            <div>{t.label}</div>
                            <div style={{ fontSize: "0.6rem", color: t.color + "66", marginTop: "2px" }}>{t.desc}</div>
                          </div>
                          {selectedTier === t.id && <span style={{ marginLeft: "auto", fontSize: "0.7rem" }}>✓</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <button
                  onClick={handleRoast}
                  disabled={typing}
                  style={{
                    background: typing ? "transparent" : tierObj.color + "cc",
                    border: `1.5px solid ${tierObj.color}`,
                    color: typing ? tierObj.color + "44" : "#000",
                    fontFamily: "'Courier New', monospace", fontSize: "0.78rem", fontWeight: "bold",
                    padding: "11px 28px", cursor: typing ? "not-allowed" : "pointer",
                    textTransform: "uppercase", letterSpacing: "2px",
                    boxShadow: typing ? "none" : `0 0 20px ${tierObj.color}55`,
                    transition: "all 0.18s",
                  }}
                >
                  {typing ? "LOADING..." : `▶ ROAST ME (${tierObj.label.toUpperCase()})`}
                </button>
                <NeonBtn onClick={clearChat} color="#444">CLEAR CHAT</NeonBtn>
              </div>
            </div>

            {/* ── Chat feed ── */}
            <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {chatLog.length === 0 && (
                <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "'Courier New', monospace", lineHeight: "2.2", color: "#1a1a1a" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🤖</div>
                  &gt; SYSTEM ARMED AND READY<br />
                  &gt; SELECT A ROAST TIER ABOVE<br />
                  &gt; THEN PRESS THE ROAST BUTTON<br />
                  <span style={{ fontSize: "0.65rem" }}>&gt; YOU HAVE BEEN WARNED</span>
                </div>
              )}
              {chatLog.map((msg, i) => {
                const t = TIERS.find(t => t.id === msg.tier) || TIERS[0];
                return (
                  <div key={i} style={{
                    background: t.color + "09", border: `1px solid ${t.color}30`,
                    borderLeft: `3px solid ${t.color}`,
                    padding: "14px 18px", fontFamily: "'Courier New', monospace",
                    fontSize: "0.8rem", color: t.color, lineHeight: "1.7",
                    animation: i === chatLog.length - 1 ? "slideUp 0.3s ease" : "none",
                    boxShadow: msg.tier === "danger" ? `0 0 20px #ff225514` : "none",
                    maxWidth: "90%",
                  }}>
                    <div style={{ fontSize: "0.58rem", color: "#444", marginBottom: "8px", display: "flex", gap: "10px" }}>
                      <span>AI_GONE_WRONG</span>
                      <span style={{ color: t.color + "55" }}>[{t.label.toUpperCase()}]</span>
                      <span>{msg.time}</span>
                    </div>
                    {msg.text}
                  </div>
                );
              })}
              {typing && (
                <div style={{ fontFamily: "'Courier New', monospace", color: "#ff225544", fontSize: "0.72rem", animation: "blink 0.9s infinite" }}>
                  &gt; AI_GONE_WRONG is loading your destruction...
                </div>
              )}
            </div>

            {/* ── Pie chart strip ── */}
            <div style={{
              borderTop: "1px solid #ffffff08", background: "#050505",
              padding: "20px 24px", flexShrink: 0,
            }}>
              <div style={{ color: "#2a2a2a", fontSize: "0.58rem", letterSpacing: "3px", marginBottom: "16px" }}>
                &gt; ROAST DAMAGE BREAKDOWN
              </div>
              <PieChart data={pieData} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
          @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #030303; scrollbar-width: thin; scrollbar-color: #00ffcc18 #000; }
          ::-webkit-scrollbar { width: 3px; }
          ::-webkit-scrollbar-thumb { background: #00ffcc18; border-radius: 2px; }
        `}</style>
      </div>
    );
  }

  // ── PROFILE PAGE ──────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#030303", color: "#00ffcc", display: "flex", flexDirection: "column" }}>
      <Scanlines />
      {Header}

      <div style={{ flex: 1, overflowY: "auto", padding: "28px 24px", maxWidth: "820px", margin: "0 auto", width: "100%" }}>

        {/* Profile card */}
        <div style={{
          background: "#080808", border: "1px solid #00ffcc18",
          padding: "24px", marginBottom: "24px",
          display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap",
        }}>
          <div style={{
            width: "64px", height: "64px", background: courseObj.color + "20",
            border: `2px solid ${courseObj.color}66`, display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: "1.8rem",
            flexShrink: 0,
          }}>
            {courseObj.icon}
          </div>
          <div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "1.1rem", color: "#00ffcc", marginBottom: "4px" }}>
              <GlitchText text={username} color="#00ffcc" />
            </div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "0.72rem", color: courseObj.color, marginBottom: "6px" }}>
              {courseObj.label} Student
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {TIERS.map(t => (
                <span key={t.id} style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: t.color }}>
                  {t.icon} {history.filter(h => h.tier === t.id).length}
                </span>
              ))}
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "#ff2255" }}>
                TOTAL: {totalRoasts}
              </span>
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <NeonBtn onClick={clearAll} color="#ff2255">CLEAR ALL DATA</NeonBtn>
          </div>
        </div>

        {/* Pie chart */}
        <div style={{
          background: "#080808", border: "1px solid #ffffff08",
          padding: "22px 24px", marginBottom: "24px",
        }}>
          <div style={{ fontFamily: "'Courier New', monospace", color: "#2a2a2a", fontSize: "0.58rem", letterSpacing: "3px", marginBottom: "18px" }}>
            &gt; ROAST DAMAGE BREAKDOWN
          </div>
          <PieChart data={pieData} />
        </div>

        {/* History */}
        <div style={{ background: "#080808", border: "1px solid #ffffff08", padding: "22px 24px" }}>
          <div style={{ fontFamily: "'Courier New', monospace", color: "#2a2a2a", fontSize: "0.58rem", letterSpacing: "3px", marginBottom: "16px" }}>
            &gt; ROAST HISTORY LOG — {totalRoasts} ENTRIES
          </div>
          {history.length === 0 ? (
            <div style={{ fontFamily: "'Courier New', monospace", color: "#1c1c1c", fontSize: "0.75rem", textAlign: "center", padding: "30px 0" }}>
              No roast history yet. Go get some damage.
            </div>
          ) : (
            history.map((r, i) => {
              const t = TIERS.find(t => t.id === r.tier) || TIERS[0];
              return (
                <div key={i} style={{
                  borderLeft: `2px solid ${t.color}44`, padding: "10px 14px",
                  marginBottom: "10px", background: t.color + "07",
                  fontFamily: "'Courier New', monospace",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", flexWrap: "wrap", gap: "4px" }}>
                    <span style={{ fontSize: "0.58rem", color: t.color + "88" }}>
                      #{history.length - i} · {t.label.toUpperCase()} · {r.course?.toUpperCase()}
                    </span>
                    <span style={{ fontSize: "0.58rem", color: "#333" }}>{r.time}</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: t.color, lineHeight: "1.6" }}>{r.text}</div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #030303; scrollbar-width: thin; scrollbar-color: #00ffcc18 #000; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #00ffcc18; }
      `}</style>
    </div>
  );
}
