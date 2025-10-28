// ✅ src/api/api.jsx
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://backendfastapi.sdude.in";

// ✅ Create a reusable Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * ============================
 * 🧠 AI/ML - House Price Prediction APIs
 * ============================
 */

/** Predict house price based on user input. */
export const predictHousePrice = async (payload) => {
  try {
    const res = await api.post("/predict", payload);
    return res.data;
  } catch (error) {
    console.error("❌ Error in predictHousePrice:", error);
    throw error;
  }
};

/** Fetch model metadata (optional endpoint). */
export const fetchModelInfo = async () => {
  try {
    const res = await api.get("/predict/info");
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching model info:", error);
    return { status: "unavailable" };
  }
};

/** Log user prediction (for analytics). */
export const logPrediction = async (payload) => {
  try {
    const res = await api.post("/predict/log", payload);
    return res.data;
  } catch (error) {
    console.error("❌ Error logging prediction:", error);
    throw error;
  }
};

/** Get recent prediction history. */
export const fetchRecentPredictions = async (limit = 10) => {
  try {
    const res = await api.get(`/predict/history?limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching recent predictions:", error);
    return [];
  }
};

/** Health check for backend. */
export const checkBackendHealth = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (error) {
    console.error("❌ Backend health check failed:", error);
    return { status: "down" };
  }
};

// ✅ Default export for axios instance
export default api;
