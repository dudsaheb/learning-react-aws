// ✅ src/components/PricePredictor.jsx
import React, { useState, useEffect } from "react";
import axios from "../api/api"; // Default backend instance
import ResultCard from "./ResultCard";
import { fetchAgentAdvice } from "../api/api"; // New AI Agent API

const PricePredictor = ({ onPredict }) => {
  const [form, setForm] = useState({ area: "", bedrooms: "", bathrooms: "" });
  const [loading, setLoading] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [agentAdvice, setAgentAdvice] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit to ML backend for price prediction
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAgentAdvice(null); // Reset previous AI output

    try {
      // 1️⃣ Predict price using ML model
      const res = await axios.post("/predict", form);
      const price = res.data.predicted_price;
      setPredictedPrice(price);

      // 2️⃣ Log prediction to DB
      await axios.post("/predict/log", { ...form, predicted_price: price });

      // 3️⃣ Fetch updated history
      const hist = await axios.get("/predict/history?limit=5");
      setHistory(hist.data);

      // 4️⃣ Notify parent (HousePriceDemo)
      if (onPredict) onPredict(form, price);

      // 5️⃣ Call the Generative Agent to explain and analyze prediction
      setAiLoading(true);
      const agentGoal = `
        Analyze the following house details:
        - Area: ${form.area} sq.ft
        - Bedrooms: ${form.bedrooms}
        - Bathrooms: ${form.bathrooms}
        - Predicted price: ₹${(price * 100000).toLocaleString()}.
        Compare this with typical Bangalore market rates, 
        and give a short investment insight or pricing strategy.
      `;
      const agentRes = await fetchAgentAdvice({
        goal: agentGoal,
        max_listings: 3,
        location: "Bangalore",
      });
      setAgentAdvice(agentRes.advice);
    } catch (err) {
      console.error("❌ Prediction failed:", err);
      setError("Failed to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
      setAiLoading(false);
    }
  };

  // Load recent prediction history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("/predict/history?limit=5");
        setHistory(res.data);
      } catch (err) {
        console.error("❌ Error fetching history:", err);
      }
    };
    fetchHistory();
  }, []);

  // Render UI
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏡 House Price Predictor + AI Advisor</h2>
      <p style={styles.subtitle}>
        Enter house details to estimate its price using ML — then let our AI Agent explain the reasoning and market insight.
      </p>

      {/* Prediction Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="area"
          type="number"
          placeholder="Area (sq.ft)"
          value={form.area}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="bedrooms"
          type="number"
          placeholder="Bedrooms"
          value={form.bedrooms}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="bathrooms"
          type="number"
          placeholder="Bathrooms"
          value={form.bathrooms}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Predicting..." : "🔮 Predict & Analyze"}
        </button>
      </form>

      {/* Error */}
      {error && <p style={styles.error}>{error}</p>}

      {/* ML Result Card */}
      {predictedPrice && (
        <ResultCard inputData={form} predictedPrice={predictedPrice} />
      )}

      {/* Generative AI / Agentic Advice */}
      {aiLoading && (
        <p style={styles.loading}>🤖 AI Agent is analyzing market data...</p>
      )}

      {agentAdvice && (
        <div style={styles.adviceBox}>
          <h4 style={styles.adviceTitle}>💬 AI Property Insight</h4>
          <p style={styles.adviceText}>{agentAdvice}</p>
        </div>
      )}

      {/* History Table */}
      {history.length > 0 && (
        <div style={styles.history}>
          <h4 style={styles.historyTitle}>📜 Recent Predictions</h4>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Area</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.area}</td>
                  <td>{item.bedrooms}</td>
                  <td>{item.bathrooms}</td>
                  <td>
                    ₹
                    {Number(item.predicted_price).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ============================
// 🎨 Modern Styles
// ============================
const styles = {
  container: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "720px",
    margin: "20px auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#222",
  },
  subtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "25px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  loading: {
    color: "#007bff",
    fontStyle: "italic",
    marginTop: "10px",
  },
  adviceBox: {
    marginTop: "25px",
    background: "#f8faff",
    border: "1px solid #cfe2ff",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "left",
  },
  adviceTitle: {
    fontSize: "18px",
    color: "#004085",
    marginBottom: "8px",
  },
  adviceText: {
    fontSize: "15px",
    color: "#333",
    whiteSpace: "pre-wrap",
  },
  history: {
    marginTop: "30px",
    textAlign: "center",
  },
  historyTitle: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "15px",
  },
};

export default PricePredictor;
