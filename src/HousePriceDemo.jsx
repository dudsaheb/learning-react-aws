import React, { useState } from "react";
import PricePredictor from "./components/PricePredictor";
import axios from "./api/api";

/**
 * HousePriceDemo.jsx
 * -------------------
 * AI-enhanced real estate demo with city selection.
 * Lets user choose a city and fetches dynamic listings via Agentic AI.
 */

const HousePriceDemo = () => {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [agentAdvice, setAgentAdvice] = useState("");
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  // 🔹 Fetch AI advice from backend
  const fetchAgentAdvice = async (data, city) => {
    if (!data?.area || !data?.bedrooms || !data?.bathrooms) return;

    const goal = `List top 10 property locations in ${city} for a ${data.bedrooms}BHK, ${data.area} sq.ft house with ${data.bathrooms} bathrooms. 
    Include minimum and maximum price range with area names.`;

    setLoading(true);
    setAgentAdvice("");
    setPropertyList([]);

    try {
      const res = await axios.post("/agent/advise", {
        goal,
        location: city,
      });

      setAgentAdvice(res.data.advice || "No AI insights returned.");
      const action = res.data.actions?.[0];
      if (action?.result?.listings) {
        setPropertyList(action.result.listings);
      }
    } catch (error) {
      console.error("❌ Error fetching AI insights:", error);
      setAgentAdvice("Failed to get insights. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle City Change
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (formData) fetchAgentAdvice(formData, city);
  };

  // 🔹 When prediction completes in PricePredictor
  const handlePredictionComplete = (data) => {
    setFormData(data);
    fetchAgentAdvice(data, selectedCity);
  };

  return (
    <div style={styles.pageContainer}>
      {/* ===== Page Header ===== */}
      <header style={styles.header}>
        <h1 style={styles.title}>🏡 House Price & Property Advisor</h1>
        <p style={styles.subtitle}>
          Predict prices and explore area insights powered by{" "}
          <strong>FastAPI + Scikit-learn + OpenAI Agent</strong>.
        </p>
      </header>

      {/* ===== City Selector ===== */}
      <div style={styles.citySelectorContainer}>
        <label style={styles.label}>Select City:</label>
        <select
          value={selectedCity}
          onChange={handleCityChange}
          style={styles.select}
        >
          <option value="Bangalore">🏙️ Bangalore</option>
          <option value="Hyderabad">🌇 Hyderabad</option>
          <option value="Pune">🏢 Pune</option>
          <option value="Chennai">🌴 Chennai</option>
        </select>
      </div>

      {/* ===== Predictor Section ===== */}
      <main style={styles.main}>
        <section style={styles.section}>
          <PricePredictor onPredict={handlePredictionComplete} />
        </section>
      </main>

      {/* ===== AI Section ===== */}
      <section style={styles.agentSection}>
        {loading && (
          <p>
            🤖 Fetching AI insights for <strong>{selectedCity}</strong>...
          </p>
        )}

        {!loading && agentAdvice && (
          <>
            <h3>🤖 AI Property Insights for {selectedCity}</h3>
            <p style={styles.advice}>{agentAdvice}</p>
          </>
        )}

        {!loading && propertyList.length > 0 && (
          <div style={styles.propertyContainer}>
            <h4>🏘️ Top Property Listings in {selectedCity}</h4>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Area (sq.ft)</th>
                  <th>BHK</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {propertyList.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        {p.title}
                      </a>
                    </td>
                    <td>{p.area}</td>
                    <td>
                      {p.bedrooms}BHK / {p.bathrooms} Bath
                    </td>
                    <td>₹{p.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ===== Footer ===== */}
      <footer style={styles.footer}>
        <p>
          Built with ❤️ by <strong>Shaik Dud Saheb</strong> using FastAPI, React, and OpenAI.
        </p>
      </footer>
    </div>
  );
};

// ===========================
// 🎨 Styling
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
  title: { fontSize: "30px", fontWeight: "700", marginBottom: "10px" },
  subtitle: {
    fontSize: "16px",
    maxWidth: "650px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
  citySelectorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  label: { fontWeight: "600", fontSize: "16px", color: "#333" },
  select: {
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 20px",
    flexGrow: 1,
  },
  section: { width: "100%", maxWidth: "800px", marginBottom: "30px" },
  agentSection: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    background: "#f7f9fb",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  advice: {
    fontSize: "16px",
    color: "#333",
    whiteSpace: "pre-wrap",
    marginBottom: "20px",
  },
  propertyContainer: { marginTop: "10px" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "15px" },
  link: { color: "#007bff", textDecoration: "none" },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f7f9fb",
    borderTop: "1px solid #eaeaea",
    fontSize: "14px",
    color: "#666",
  },
};

export default HousePriceDemo;
