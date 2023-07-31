import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Contentarea from "./components/Contentarea";
import "./style.css";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Sidebar onCardClick={handleCardClick} />
      <Contentarea selectedCard={selectedCard} />
    </div>
  );
}

export default App;
