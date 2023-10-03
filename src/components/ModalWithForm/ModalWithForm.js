import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  name,
  onCloseModal,
  onCloseModalByOverlay,
  title,
  children,
  buttonText,
  onSubmit
}) {
  return (
    <div
      className={`modal modal__type_${name}`}
      onClick={onCloseModalByOverlay}
    >
      <div className="modal__content">
        <button
          type="button"
          onClick={onCloseModal}
          className="modal__close-btn"
        />
        <p className="modal__title">{title}</p>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
