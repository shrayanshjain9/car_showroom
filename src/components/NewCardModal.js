import React, { useState } from "react";

const NewCardModal = ({ isOpen, onClose, onSave }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const [newCardCountry, setNewCardCountry] = useState("");
  const [newCardFounded, setNewCardFounded] = useState();
  //   const [newCardId, setNewCardId] = useState(3);
  //   let count = 3;

  const handleTitleChange = (event) => {
    setNewCardTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewCardDescription(event.target.value);
  };

  const handleCountryChange = (event) => {
    setNewCardCountry(event.target.value);
  };

  const handleFoundedChange = (event) => {
    setNewCardFounded(event.target.value);
  };

  const generateNewId = () => {
    // Generate a random number for simplicity.
    return Math.floor(Math.random() * 10000);
  };
  const handleSave = () => {
    onSave({
      title: newCardTitle,
      description: newCardDescription,
      country: newCardCountry,
      founded: parseInt(newCardFounded, 10),
      id: generateNewId(),
    });
    setNewCardTitle("");
    setNewCardDescription("");
    setNewCardCountry("");
    setNewCardFounded();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Card</h2>
        <div>
          <input
            // type="text"
            value={newCardTitle}
            onChange={handleTitleChange}
            placeholder="Title"
          />
        </div>

        <div>
          <textarea
            value={newCardDescription}
            onChange={handleDescriptionChange}
            placeholder="Description"
          />
        </div>
        <div>
          <input
            value={newCardCountry}
            onChange={handleCountryChange}
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="number"
            value={newCardFounded}
            onChange={handleFoundedChange}
            placeholder="Founded"
          />
        </div>

        <button className="modalButton" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewCardModal;
