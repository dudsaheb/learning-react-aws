import React from "react";
import PricePredictor from "./components/PricePredictor";

/**
 * HousePricePropertyAgentDemo.jsx
 * -------------------
 * Full AI/ML demo page for House Price Prediction.
 * Contains the PricePredictor component (form + result + history).
 */

const HousePricePropertyAgentDemo = () => {
  return (
    <div style={styles.pageContainer}>
      {/* ===== Page Header ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>🏡 House Price AI/ML Demo</h1>
        <p style={styles.subtitle}>
          Enter house details below to predict the market price using the trained
          <strong> FastAPI + Scikit-learn </strong> model.
        </p>
      </header>

      {/* ===== Main Content ===== */}
      <main style={styles.main}>
        <section style={styles.section}>
          <PricePredictor />
        </section>
      </main>      


      {/* ===== Footer ===== */}
      <footer style={styles.footer}>
        <p>
          Built with ❤️ by <strong>Shaik Dud Saheb</strong> using FastAPI, React, and AWS.
        </p>
      </footer>
    </div>
  );
};

// ===========================
// 🎨 Styling (Modern + Responsive)
// ===========================
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px 20px 20px",
    background: "#007bff",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    maxWidth: "650px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 20px",
    flexGrow: 1,
  },
  section: {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "30px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f7f9fb",
    borderTop: "1px solid #eaeaea",
    fontSize: "14px",
    color: "#666",
  },
};

export default HousePricePropertyAgentDemo;
