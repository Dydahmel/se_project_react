import React from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";






export default function RegisterModal({
    title,
    buttonText,
    onCloseModal,
    onCloseModalByOverlay,
    //onSubmit,
    //isOpen
}){
    return(
        <ModalWithForm
        title={title}
        buttonText={buttonText}
        onCloseModal={onCloseModal}
        onCloseModalByOverlay={onCloseModalByOverlay}
        //onSubmit={handleSubmit}
        //isOpen={isOpen}        
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
            <label className="form__label text__label">
                Name
                <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                className="text__input"
                placeholder="Name"
                //value={values.name}
                //onChange={handleChange}
                />
            </label>
            <label className="form__label text__label">
                Avatar URL
                <input
                type="url"
                name="avatar"
                minLength="1"
                maxLength="300"
                className="text__input"
                placeholder="Avatar URL"
                //value={values.imageUrl}
                //onChange={handleChange}
                /> 
            </label> 
          
        </ModalWithForm>
    )
}