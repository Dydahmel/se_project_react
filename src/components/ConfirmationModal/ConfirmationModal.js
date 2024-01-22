import React from "react";
import "../ModalWithForm/ModalWithForm.css";
import { Modal } from "../Modal/Modal";

export default function ConfirmationModal({
  onCloseModal,  
  onCancelClick,
  onYesClick,
  confirmationButtonText,
}) {
  return (
    <Modal onClose={onCloseModal}>    
        <div className="modal__confirmation">
          <div className="modal__confirmation-container">
            <p className="modal__confirmation-text">
              Are you sure you want to delete this item?
            </p>
            <p className="modal__confirmation-text">
              This action is irreversible.
            </p>
          </div>
          <button
            type="text"
            className="modal__confirmation-btn modal__confirmation-yes-btn"
            onClick={onYesClick}
          >
            {confirmationButtonText}
          </button>
          <button
            type="text"
            className="modal__confirmation-btn"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>   
    </Modal>
  );
}
