import React, { useEffect, useState } from "react";
import NewCardModal from "./NewCardModal";
// const dummyData1 = [
//   {
//     id: 1,
//     title: "Toyota",
//     description: "Japanese automotive manufacturer",
//     country: "Japan",
//     founded: 1937,
//   },
//   {
//     id: 2,
//     title: "BMW",
//     description: "German luxury automobile manufacturer",
//     country: "Germany",
//     founded: 1916,
//   },
//   {
//     id: 3,
//     title: "Ford",
//     description: "American multinational automaker",
//     country: "United States",
//     founded: 1903,
//   },
//   // Add more car companies with additional data
// ];

const Sidebar = ({ onCardClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dummyData1, setDummyData1] = useState([
    {
      id: 1,
      title: "Toyota",
      description: "Japanese automotive manufacturer",
      country: "Japan",
      founded: 1937,
    },
    {
      id: 2,
      title: "BMW",
      description: "German luxury automobile manufacturer",
      country: "Germany",
      founded: 1916,
    },
    {
      id: 3,
      title: "Ford",
      description: "American multinational automaker",
      country: "United States",
      founded: 1903,
    },
    // Add more car companies with additional data
  ]);
  const [filteredData, setFilteredData] = useState(dummyData1);
  const [newCardModalOpen, setNewCardModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(dummyData1);
    }
  }, [searchQuery]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

    // filteredData1();
    setFilteredData(
      dummyData1.filter(
        (card) =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    console.log("checking search", searchQuery);
  };

  // const handleAddNewCardClick = () => {
  //   setNewCardModalOpen(true);
  // };

  const handleModalOpen = () => {
    setNewCardModalOpen(true);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSaveNewCard = (newCardData) => {
    console.log("New Card Data:", newCardData);
    const newModified = [...dummyData1, newCardData];
    console.log("newMODI", newModified);
    setDummyData1(newModified);
    console.log("dummy data print", dummyData1);
    handleModalClose();
  };

  useEffect(() => {
    // setDummyData1(newModified);
    console.log("dummy data print (inside useEffect):", dummyData1);
  }, [dummyData1]);

  return (
    <div className="sidebar">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <div className="card-list">
        {filteredData.map((card) => (
          <div key={card.id} className="card" onClick={() => onCardClick(card)}>
            <h4>{card.title}</h4>
            <p>Description: {card.description}</p>
            <p>Country: {card.country}</p>
            <p>Founded: {card.founded}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <NewCardModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={handleSaveNewCard}
        />
      )}
      {/* <button onClick={handleAddNewCardClick}>Add New Card</button> */}
      <button className="moveButton" onClick={handleModalOpen}>
        Add New Card
      </button>
    </div>
  );
};

export default Sidebar;
