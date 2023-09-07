import React from "react";
import './ModalWithForm.css';
import './Form/Form';
import Form from "./Form/Form";

function ModalWithForm({name, onCloseModal, onCloseModalByOverlay, title, buttonText='Add garment'}){
    return(
        <div className={`modal modal__type_${name}`} onClick = {onCloseModalByOverlay}>
            <div className="modal__content">
                <button type="button" onClick={onCloseModal} className="modal__close-btn"></button>
                <p className="modal__title">{title}</p>
                <form className="modal__form"><Form/></form>
                <button type="submit" className="modal__submit-btn">{buttonText}</button>
            </div>
        </div>
    )
}

export default ModalWithForm