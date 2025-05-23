import React from "react";
import "../styles/Card.css";
function Card({ card }) {
  return (
    <div className="card">
      <img src={`/orders/${card.image}`} alt={card.name} />
      <p className="card-name">{card.name}</p>
    </div>
  );
}
export default Card;
