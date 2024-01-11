import React from "react";
import "./ItemCard.css";
import likeDisabled from "../../../images/like-btn__disabled.svg"
import likeActive from "../../../images/like-btn__active.svg"
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";




function ItemCard({ card, onSelectCard, onCardLike }) {
  
  const {currentUser} = useContext(CurrentUserContext)
  const isLiked = card.likes.some(_id => _id === currentUser?._id);
  function handleLike(){
    onCardLike({id : card._id, isLiked})
    // console.log(isLiked)
    // console.log(card._id)
    // toggleLikeBtn()
  }

  // useEffect(()=> {
  //   setLikeBtn(card === isLiked ? likeActive : likeDisabled);
  // }, [])


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
        <button type="button" className="card__like-btn" onClick={() => handleLike()}>
          <img src={isLiked ? likeDisabled : likeActive}
          className="card__like-btn_img"
          alt="like-button"/>            
        </button>
        
      </div>
    </li>
  );
}

export default ItemCard;
