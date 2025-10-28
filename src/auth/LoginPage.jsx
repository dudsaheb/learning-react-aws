import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/posts");
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    login(username, password);
  };

  const handleBack = () => {
    navigate("/register");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>

        <div style={styles.demoBox}>
          <p style={styles.demoTitle}>Demo Credentials</p>
          <p style={styles.demoText}>
            <strong>Username:</strong> testuser123
          </p>
          <p style={styles.demoText}>
            <strong>Password:</strong> password
          </p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="password"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.loginButton}>
            Log In
          </button>
        </form>

        <button onClick={handleBack} style={styles.registerButton}>
          Register
        </button>
      </div>
    </div>
  );
}

// 🎨 Clean, Modern Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    borderRadius: "14px",
    padding: "35px 30px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "20px",
  },
  demoBox: {
    background: "#f1f5f9",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "25px",
    textAlign: "left",
  },
  demoTitle: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#333",
    marginBottom: "5px",
  },
  demoText: {
    fontSize: "14px",
    color: "#444",
    margin: "2px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
    color: "#333",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  loginButton: {
    padding: "12px",
    borderRadius: "8px",
    background: "#007bff",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  registerButton: {
    marginTop: "15px",
    background: "transparent",
    color: "#007bff",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    textDecoration: "underline",
  },
};

export default LoginPage;
