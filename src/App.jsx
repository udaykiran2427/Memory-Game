import { useState, useEffect } from "react";
import cardsData from "./data/cards.json";
import CardGrid from "./components/CardGrid";
import "./styles/App.css";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(cardsData);
    setCards(shuffled);
  }, []);

  return (
    <div className="app">
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
