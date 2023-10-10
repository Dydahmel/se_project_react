import React from "react";
import "./ClothesSection.css";
import ItemCard from "../../Main/ItemCard/ItemCard";

export default function ClothesSection({
  onSelectCard,
  onCreateModal,
  clothingItems,
}) {
  return (
    <section className="clothes">
      <div className="clothes__text-container">
        <p className="clothes__header">Your items</p>
        <button
          type="text"
          className="clothes__add-btn"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__list card__list">
        {clothingItems.map((card) => {
          return (
            <ItemCard card={card} onSelectCard={onSelectCard} key={card._id} />
          );
        })}
      </ul>
    </section>
  );
}

//onSelectCard={onSelectCard}
