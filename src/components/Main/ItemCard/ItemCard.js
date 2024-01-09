import React from "react";
import "./ItemCard.css";
import likeDisabled from "../../../images/like-btn__disabled.svg"



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
        <button type="button" className="card__like-btn">
          <img src={likeDisabled}
          className="card__like-btn_img"/>            
        </button>
        
      </div>
    </li>
  );
}

export default ItemCard;
