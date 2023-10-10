import React from "react";
import "../ModalWithForm/ModalWithForm.css";

export default function ConfirmationModal({
  onCloseModal,
  onCloseModalByOverlay,
  onCancelClick,
  onYesClick,
}) {
  return (
    <div className={`modal`} onClick={onCloseModalByOverlay}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onCloseModal}
          className="modal__close-btn"
        />
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
            Yes, delete item
          </button>
          <button
            type="text"
            className="modal__confirmation-btn"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
