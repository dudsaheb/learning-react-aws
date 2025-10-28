import React from 'react';

const ResultCard = ({ data }) => {
  return (
    <div className="result-card">
      <h3>Predicted Price: ₹{data.predicted_price.toLocaleString()}</h3>
    </div>
  );
};

export default ResultCard;
