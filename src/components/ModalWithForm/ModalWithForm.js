import React from "react";
import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";

function ModalWithForm({
  name,
  onCloseModal,  
  title,
  children,
  buttonText,
  onSubmit,
  aditionalBtn,
  isFormFilled,
}) {
  return (
    <Modal name={name} onClose={onCloseModal}>      
        <p className="modal__title">{title}</p>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div>
            <button
              type="submit"
              disabled={!isFormFilled}
              className={
                isFormFilled
                  ? "modal__submit-btn"
                  : "modal__submit-btn_disabled"
              }
            >
              {buttonText}
            </button>
            {aditionalBtn}
          </div>
        </form>          
    </Modal>
  );
}

export default ModalWithForm;
