import React from "react";

/**
 * ResultCard Component
 * ---------------------
 * Displays predicted house price details.
 * Supports:
 *  - inputData + predictedPrice props (from HousePriceDemo)
 *  - data prop (legacy support from older components)
 *  - safe defaults (no crash on undefined)
 */
const ResultCard = ({ inputData = {}, predictedPrice = null, data = {} }) => {
  // ✅ Extract values safely from either inputData or data props
  const area = inputData.area || data.area || "-";
  const bedrooms = inputData.bedrooms || data.bedrooms || "-";
  const bathrooms = inputData.bathrooms || data.bathrooms || "-";
  const price =
    predictedPrice ?? data.predicted_price ?? null; // handles undefined/null gracefully

  // 🔸 Return nothing if no valid price found
  if (price === null || price === undefined)
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>No prediction data available yet.</p>
      </div>
    );

  // ✅ Render result card
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>🏠 Prediction Result</h2>

      <div style={styles.details}>
        <p>
          <strong>Area:</strong> {area} sq.ft
        </p>
        <p>
          <strong>Bedrooms:</strong> {bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {bathrooms}
        </p>
      </div>

      <div style={styles.priceBox}>
        <h3 style={styles.priceLabel}>💰 Estimated Price:</h3>
        <h2 style={styles.priceValue}>
          ₹{Number(price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </h2>
      </div>

      <p style={styles.footerNote}>
        (Prediction powered by FastAPI + Scikit-learn ML Model)
      </p>
    </div>
  );
};

// ============================
// 🎨 Inline Styles (Clean UI)
// ============================
const styles = {
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "30px 25px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    textAlign: "center",
    marginTop: "20px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  title: {
    fontSize: "22px",
    color: "#222",
    marginBottom: "12px",
  },
  details: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  priceBox: {
    background: "#f2f8ff",
    borderRadius: "10px",
    padding: "15px 10px",
    marginTop: "10px",
  },
  priceLabel: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "5px",
  },
  priceValue: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#007bff",
  },
  footerNote: {
    fontSize: "13px",
    color: "#888",
    marginTop: "15px",
  },
  empty: {
    background: "#fafafa",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  emptyText: {
    fontSize: "15px",
    color: "#777",
  },
};

export default ResultCard;
