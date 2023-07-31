import React, { useState } from "react";
import NewCardModal from "./NewCardModal";

const dummyData2 = {
  company1: [
    { id: 1, name: "Car Model A", description: "Description of Car Model A" },
    { id: 2, name: "Car Model B", description: "Description of Car Model B" },
    // Add more dummy data for company1
  ],
  company2: [
    { id: 1, name: "Car Model X", description: "Description of Car Model X" },
    { id: 2, name: "Car Model Y", description: "Description of Car Model Y" },
    // Add more dummy data for company2
  ],
  // Add more data for other companies as needed
};

const ContentArea = ({ selectedCard }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newCardModalOpen, setNewCardModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  const handleModalOpen = () => {
    setNewCardModalOpen(true);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddNewCardClick = () => {
    setNewCardModalOpen(true);
  };

  // const handleSaveNewCard = (newCardData) => {
  //   console.log("New Card Data:", newCardData);
  //   const newModified = [...dummyData1, newCardData];
  //   console.log("newMODI", newModified);
  //   setDummyData1(newModified);
  //   console.log("dummy data print", dummyData1);
  //   handleModalClose();
  // };

  let data2 = [];
  if (selectedCard) {
    data2 = dummyData2[selectedCard.title.toLowerCase()] || [];
  }

  const filteredData2 = data2.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content-area">
      {selectedCard ? (
        <div>
          <h2>{selectedCard.title}</h2>
          <p>Description: {selectedCard.description}</p>
          <p>Country: {selectedCard.country}</p>
          <p>Founded: {selectedCard.founded}</p>
          {/* <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div> */}
          <div className="card-list">
            {filteredData2.map((card) => (
              <div key={card.id} className="card">
                <h3>{card.name}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          {/* {isModalOpen && (
        <NewCardModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={handleSaveNewCard}
        />
      )} */}
          {/* <button onClick={handleAddNewCardClick}>Add New Card</button>
          <button onClick={handleModalOpen}>Add New Card</button> */}
        </div>
      ) : (
        <p>Please select a card from the sidebar</p>
      )}
    </div>
  );
};

export default ContentArea;
