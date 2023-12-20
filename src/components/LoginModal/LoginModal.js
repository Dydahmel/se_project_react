import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { getInitialValues } from "../../utils/initialValues";
import { useEffect } from "react";

export default function LoginModal({
    title,
    buttonText,
    onCloseModal,
    onCloseModalByOverlay,
    onSubmit,
    isOpen

}){
    const initialValues = getInitialValues('login')


    const { values, handleChange, setValues } = useForm(initialValues);

    useEffect(() => {
        setValues(initialValues);
        // eslint-disable-next-line
    }, [isOpen]);

    
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(values);
    }


    return(
        <ModalWithForm
        title={title}
        buttonText={buttonText}
        onCloseModal={onCloseModal}
        onCloseModalByOverlay={onCloseModalByOverlay}
        onSubmit={handleSubmit}
        isOpen={isOpen}
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
            value={values.email}
            onChange={handleChange}
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
                value={values.password}
                onChange={handleChange}
                />
            </label>

        </ModalWithForm>
    )

}