import { useState } from "react";
import { useEffect } from "react";
import cardsData from "./data/cards.json";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

import "./App.css";
function App() {
  return <div></div>;
}
export default App;
