import React, { useContext } from "react";
import "../ModalWithForm/ModalWithForm.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Modal } from "../Modal/Modal";

function ItemModal({ selectedCard, onCloseModal, onDelete, isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn =
    selectedCard.owner && selectedCard.owner._id === currentUser?._id;

  console.log(isOwn)

  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn && isLoggedIn
      ? "modal__delete-btn_visible"
      : "modal__delete-btn_hidden"
  }`;
  

  return (
    <Modal onClose={onCloseModal} modalContentClassName="modal__content-img">
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
    </Modal>
  );
}

export default ItemModal;
