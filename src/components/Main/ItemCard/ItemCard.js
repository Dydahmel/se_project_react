import React from "react";
import "./ItemCard.css";

function ItemCard({ card, onSelectCard }) {
  return (
    <li className="card__item">
      <div>
        <img
          src={card.link || card.imageUrl}
          className="card__image"
          alt={card.name}
          onClick={() => onSelectCard(card)}
        ></img>
      </div>
      <div className="card__name">
        <span className="card__name-wrapper">{card.name}</span>
      </div>
    </li>
  );
}

export default ItemCard;
