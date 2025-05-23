import React from "react";
import Card from "./Card";
import "../styles/CardGrid.css";
function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}
export default CardGrid;
