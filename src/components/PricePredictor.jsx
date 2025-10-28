import React, { useState, useEffect } from "react";
//import axios from "../api/api"; // ✅ make sure baseURL = https://backendfastapi.sdude.in/
import { api as axios } from "../api/api";
import ResultCard from "./ResultCard";

/**
 * PricePredictor Component
 * -------------------------
 * - Accepts area, bedrooms, bathrooms
 * - Calls FastAPI backend for prediction
 * - Logs prediction to DB
 * - Fetches and displays recent history
 * - Notifies parent (HousePriceDemo) via onPredict()
 */

const PricePredictor = ({ onPredict }) => {
  const [form, setForm] = useState({ area: "", bedrooms: "", bathrooms: "" });
  const [loading, setLoading] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  // ===========================
  // 🔹 Handle Form Input Changes
  // ===========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ===========================
  // 🔹 Submit for Prediction
  // ===========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1️⃣ Predict price
      const res = await axios.post("/predict", form);
      const price = res.data.predicted_price;
      setPredictedPrice(price);

      // 2️⃣ Log prediction to DB
      await axios.post("/predict/log", { ...form, predicted_price: price });

      // 3️⃣ Fetch updated history
      const hist = await axios.get("/predict/history?limit=5");
      setHistory(hist.data);

      // 4️⃣ Notify parent component (HousePriceDemo)
      if (onPredict) onPredict(form, price);
    } catch (err) {
      console.error("❌ Prediction failed:", err);
      setError("Failed to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // 🔹 Load Initial History
  // ===========================
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

  // ===========================
  // 🔹 UI Render
  // ===========================
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏡 House Price Predictor</h2>
      <p style={styles.subtitle}>
        Enter house details to estimate its market value instantly.
      </p>

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
          {loading ? "Predicting..." : "🔮 Predict Price"}
        </button>
      </form>

      {/* Error Handling */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Show Prediction */}
      {predictedPrice && (
        <ResultCard inputData={form} predictedPrice={predictedPrice} />
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

// ===========================
// 🎨 Inline Styling (Modern + Clean)
// ===========================
const styles = {
  container: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "700px",
    margin: "20px auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "20px",
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
    transition: "border-color 0.2s",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
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
  th: {
    background: "#f3f3f3",
    padding: "8px",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
};

export default PricePredictor;
