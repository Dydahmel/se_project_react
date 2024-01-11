import React, { useContext } from "react";
import "../ModalWithForm/ModalWithForm.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({
  selectedCard,
  onCloseModal,
  onCloseModalByOverlay,
  onDelete,
}) {

  const{currentUser} = useContext(CurrentUserContext)

  const isOwn = selectedCard.owner._id === currentUser?._id
  

  const itemDeleteButtonClassName = (
    `modal__delete-btn ${isOwn ? 'modal__delete-btn_visible' : 'modal__delete-btn_hidden'}`
  );

  return (
    <div className={`modal`} onClick={onCloseModalByOverlay}>
      <div className="modal__content modal__content-img">
        <button
          type="button"
          onClick={onCloseModal}
          className="modal__close-btn"
        />
        <img
          alt={selectedCard.name}
          src={selectedCard.link || selectedCard.imageUrl}
          className="modal__img"
        />
        <div className="modal__caption">
          <div>
            <p className="modal__text ">{selectedCard.name}</p>
            <p className="modal__text">Weather: {selectedCard.weather}</p>
          </div>
          <button
            type="text"
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(selectedCard)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
