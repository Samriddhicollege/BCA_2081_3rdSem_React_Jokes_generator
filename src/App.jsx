import { useState } from "react";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("aigw_session") || "null"); } catch { return null; }
  });

  const login  = (username, course) => {
    const s = { username, course };
    localStorage.setItem("aigw_session", JSON.stringify(s));
    setUser(s);
  };
  const logout = () => {
    localStorage.removeItem("aigw_session");
    setUser(null);
  };

  return user
    ? <Dashboard username={user.username} course={user.course} onLogout={logout} />
    : <LoginPage onLogin={login} />;
}
