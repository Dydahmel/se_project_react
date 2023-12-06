import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


export default function LoginModal({
    title,
    buttonText,
    onCloseModal,
    onCloseModalByOverlay

}){
    return(
        <ModalWithForm
        title={title}
        buttonText={buttonText}
        onCloseModal={onCloseModal}
        onCloseModalByOverlay={onCloseModalByOverlay}
        >
            <label className="form__label text__label">
            Email*
            <input
            type="email"
            name="email"
            minLength="4"
            maxLength="30"
            className="text__input"
            placeholder="Email"
            //value={values.name}
            // onChange={handleChange}
                />
            </label>
            <label className="form__label text__label">
                Password*
                <input
                type="text"
                name="password"
                minLength="8"
                maxLength="300"
                className="text__input"
                placeholder="Password"
                //value={values.imageUrl}
                //onChange={handleChange}
                />
            </label>

        </ModalWithForm>
    )

}