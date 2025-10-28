// src/api/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://backendfastapi.sdude.in";

/**
 * ============================
 * 🧠 AI/ML - House Price Prediction APIs
 * ============================
 */

/**
 * Predict house price based on user input.
 * @param {Object} payload - { area, bedrooms, bathrooms }
 * @returns {Promise<Object>} predicted price JSON
 */
export const predictHousePrice = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/predict`, payload);
    return res.data;
  } catch (error) {
    console.error("❌ Error in predictHousePrice:", error);
    throw error;
  }
};

/**
 * Fetch model metadata (optional endpoint)
 * Helps verify if the ML model is live and returns model info.
 */
export const fetchModelInfo = async () => {
  try {
    const res = await axios.get(`${API_URL}/predict/info`);
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching model info:", error);
    return { status: "unavailable" };
  }
};

/**
 * Log user prediction (optional)
 * This will store the prediction request and result in RDS for analytics.
 */
export const logPrediction = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/predict/log`, payload);
    return res.data;
  } catch (error) {
    console.error("❌ Error logging prediction:", error);
    throw error;
  }
};

/**
 * Get recent prediction history (optional)
 * Fetches the latest predictions for UI dashboard display.
 */
export const fetchRecentPredictions = async (limit = 10) => {
  try {
    const res = await axios.get(`${API_URL}/predict/history?limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching recent predictions:", error);
    return [];
  }
};

/**
 * ============================
 * 🧩 Health Check
 * ============================
 */
export const checkBackendHealth = async () => {
  try {
    const res = await axios.get(`${API_URL}/`);
    return res.data;
  } catch (error) {
    console.error("❌ Backend health check failed:", error);
    return { status: "down" };
  }
};
