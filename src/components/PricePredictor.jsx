
import React, { useState } from "react";
import { predictHousePrice, fetchRecentPredictions } from "../api/api";

const PricePredictor = () => {
  const [form, setForm] = useState({ area: "", bedrooms: "", bathrooms: "" });
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await predictHousePrice(form);
    setResult(data);
    fetchRecentPredictions().then(setHistory);
  };

  // UI render
  return (
    <div>
      <h2>🏠 House Price Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input name="area" placeholder="Area" onChange={(e) => setForm({...form, area: e.target.value})}/>
        <input name="bedrooms" placeholder="Bedrooms" onChange={(e) => setForm({...form, bedrooms: e.target.value})}/>
        <input name="bathrooms" placeholder="Bathrooms" onChange={(e) => setForm({...form, bathrooms: e.target.value})}/>
        <button type="submit">Predict</button>
      </form>
      {result && <h3>Predicted Price: ₹{result.predicted_price}</h3>}
      {history.length > 0 && <p>Showing last {history.length} predictions</p>}
    </div>
  );
};

export default PricePredictor;



/*
import React, { useState } from 'react';
import axios from '../api/api';
import ResultCard from './ResultCard';

const PricePredictor = () => {
  const [form, setForm] = useState({ area: '', bedrooms: '', bathrooms: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/predict', form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Prediction failed!');
    }
  };

  return (
    <div className="container">
      <h2>🏠 House Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input name="area" placeholder="Area (sq ft)" onChange={handleChange} />
        <input name="bedrooms" placeholder="Bedrooms" onChange={handleChange} />
        <input name="bathrooms" placeholder="Bathrooms" onChange={handleChange} />
        <button type="submit">Predict Price</button>
      </form>
      {result && <ResultCard data={result} />}
    </div>
  );
};

export default PricePredictor;

*/