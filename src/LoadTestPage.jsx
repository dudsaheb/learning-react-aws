import React, { useState } from "react";
import axios from "axios";

function LoadTestPage() {
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [records, setRecords] = useState([]);

  // Backend API (public)
  const API_URL = import.meta.env.VITE_API_URL || "https://backendfastapi.sdude.in";

  // Run Load Test
  const runLoadTest = async () => {
    setLoading(true);
    setResult("");
    setRecords([]);

    try {
      const res = await axios.post(`${API_URL}/run-loadtest/`, { count });
      setResult(res.data.message || "Load test completed.");

      // Fetch latest 1000 payment records
      const paymentsRes = await axios.get(`${API_URL}/latest-payments/?limit=1000`);
      setRecords(paymentsRes.data);
    } catch (err) {
      console.error("Load test failed:", err);
      setResult("❌ Error running load test. Check backend logs or CORS settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🚀 Payment API Load Tester</h1>
      <p style={{ textAlign: "center", color: "#666" }}>
        Public page — no authentication required
      </p>

      <div style={styles.form}>
        <label style={styles.label}>Number of Requests:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min="1"
          max="1000"
          style={styles.input}
        />
        <button onClick={runLoadTest} style={styles.button} disabled={loading}>
          {loading ? "Running..." : "Run Load Test"}
        </button>
      </div>

      {result && <p style={styles.result}>{result}</p>}

      <hr style={{ margin: "30px 0" }} />

      <h2 style={styles.subheader}>📋 Latest Payment Records</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Description</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((rec, i) => (
                <tr key={i}>
                  <td>{rec.user_id}</td>
                  <td>{rec.amount}</td>
                  <td>{rec.currency}</td>
                  <td>{rec.description}</td>
                  <td>{rec.timestamp}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                  No records to display. Run a load test first.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --------------------
// Simple Inline CSS
// --------------------
const styles = {
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
    color: "#222",
    background: "#fafafa",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "26px",
  },
  subheader: {
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: "100px",
    padding: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
  result: {
    marginTop: "15px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  tableContainer: {
    maxHeight: "400px",
    overflowY: "auto",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
};

export default LoadTestPage;
