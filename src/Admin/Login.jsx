import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";   // ✅ new css import

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", {
        username,
        password,
      });
      if (res.data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin/about");
      }
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
