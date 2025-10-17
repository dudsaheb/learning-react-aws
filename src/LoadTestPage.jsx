import React, { useState, useEffect } from "react";
import axios from "axios";

function LoadTestPage() {
  const [batchSize, setBatchSize] = useState(10);
  const [batches, setBatches] = useState(100);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [metrics, setMetrics] = useState({ visible: 0, inflight: 0, delayed: 0 });
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [progress, setProgress] = useState({ sent: 0, success: 0, failed: 0 });
  const [recentRecords, setRecentRecords] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL || "https://backendfastapi.sdude.in";

  // Run Bulk Load Test
  const runLoadTest = async () => {
    setLoading(true);
    setResult("");
    setError("");
    setProgress({ sent: 0, success: 0, failed: 0 });
    setAutoRefresh(true);

    const totalBatches = parseInt(batches);
    const size = parseInt(batchSize);

    try {
      let successCount = 0;
      let failCount = 0;

      const batchRequests = Array.from({ length: totalBatches }, async (_, i) => {
        try {
          const res = await axios.post(`${API_URL}/payments/queue/bulk/?batch_size=${size}`);
          successCount += res.data.success || 0;
        } catch (e) {
          failCount += 1;
        }
        setProgress({ sent: i + 1, success: successCount, failed: failCount });
      });

      await Promise.all(batchRequests);
      setResult(`✅ Load test finished. Sent ${totalBatches * size} messages total.`);
    } catch (err) {
      console.error("Load test failed:", err);
      setError("❌ Error running load test. Check backend logs or CORS settings.");
    } finally {
      setLoading(false);
      setAutoRefresh(false);
    }
  };

  // Fetch SQS Queue Metrics
  const fetchQueueMetrics = async () => {
    try {
      const res = await axios.get(`${API_URL}/payments/queue/metrics`);
      setMetrics(res.data);
    } catch (err) {
      console.error("Error fetching metrics:", err);
    }
  };

  // Fetch Latest Payment Records
  const fetchRecentRecords = async () => {
    try {
      const res = await axios.get(`${API_URL}/payments/latest/?limit=20`);
      setRecentRecords(res.data);
    } catch (err) {
      console.error("Error fetching recent records:", err);
    }
  };

  // Auto-refresh metrics and records every 5 seconds while load test is running
  useEffect(() => {
    let interval;
    if (autoRefresh) {
      fetchQueueMetrics();
      fetchRecentRecords();
      interval = setInterval(() => {
        fetchQueueMetrics();
        fetchRecentRecords();
      }, 5000);
    } else {
      fetchQueueMetrics();
      fetchRecentRecords();
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🚀 AWS SQS Payment Load Tester</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Send bulk messages to the SQS queue and monitor in real time.
      </p>

      <div style={styles.form}>
        <div>
          <label style={styles.label}>Batch Size:</label>
          <input
            type="number"
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            min="1"
            max="100"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Batches:</label>
          <input
            type="number"
            value={batches}
            onChange={(e) => setBatches(e.target.value)}
            min="1"
            max="2000"
            style={styles.input}
          />
        </div>
        <button onClick={runLoadTest} style={styles.button} disabled={loading}>
          {loading ? "Running..." : "Run Load Test"}
        </button>
      </div>

      {result && <p style={{ ...styles.result, color: "#007bff" }}>{result}</p>}
      {error && <p style={{ ...styles.result, color: "red" }}>{error}</p>}

      <div style={styles.progressContainer}>
        <h3>📦 Progress</h3>
        <p>API Calls Sent: {progress.sent} / {batches}</p>
        <p>✅ Success: {progress.success}</p>
        <p>❌ Failed: {progress.failed}</p>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <div style={styles.metricsContainer}>
        <h2>📊 Queue Metrics (auto-refresh every 5s)</h2>
        <p>🟢 Visible: {metrics.visible}</p>
        <p>⚙️ In-flight: {metrics.inflight}</p>
        <p>⏱️ Delayed: {metrics.delayed}</p>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <div style={styles.recordsContainer}>
        <h2>🕓 Recent Payment Records (latest 20)</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Description</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {recentRecords.length > 0 ? (
              recentRecords.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.id}</td>
                  <td>{rec.user_id}</td>
                  <td>₹{rec.amount}</td>
                  <td>{rec.currency}</td>
                  <td>{rec.description}</td>
                  <td>{new Date(rec.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No recent records yet.
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
// Styles
// --------------------
const styles = {
  container: {
    maxWidth: "950px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
    color: "#222",
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: { textAlign: "center", fontSize: "26px" },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    margin: "20px 0",
  },
  label: { fontWeight: "bold", display: "block", marginBottom: "5px" },
  input: { width: "100px", padding: "5px", fontSize: "16px" },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
  result: { marginTop: "15px", textAlign: "center", fontWeight: "bold" },
  progressContainer: {
    textAlign: "center",
    marginTop: "20px",
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
  },
  metricsContainer: {
    textAlign: "center",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  recordsContainer: {
    marginTop: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default LoadTestPage;
