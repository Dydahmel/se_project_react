import React, {useEffect} from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { getInitialValues } from "../../utils/initialValues";







export default function RegisterModal({
    title,
    buttonText,
    onCloseModal,
    onCloseModalByOverlay,
    onSubmit,
    isOpen
}){
    const initialValues = getInitialValues('signUp')


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
            // value={props.value ?? wheelSize}
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
            <label className="form__label text__label">
                Name
                <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                className="text__input"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
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
                value={values.avatar}
                onChange={handleChange}
                /> 
            </label> 
          
        </ModalWithForm>
    )
}