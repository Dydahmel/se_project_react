import React from "react";
import "./ClothesSection.css";
import ItemCard from "../../Main/ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function ClothesSection({
  onSelectCard,
  onCreateModal,
  clothingItems,
}) {
  const {currentUser} = useContext(CurrentUserContext)

  


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
          const isOwn = currentUser._id === card.owner._id          
          if(isOwn){
            return (
            <ItemCard card={card} onSelectCard={onSelectCard} key={card._id} />
          )}
          return null
        })}
      </ul>
    </section>
  );
}

//onSelectCard={onSelectCard}
