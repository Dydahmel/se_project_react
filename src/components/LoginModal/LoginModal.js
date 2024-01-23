import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { getInitialValues } from "../../utils/initialValues";
import { useEffect } from "react";

export default function LoginModal({
  title,
  buttonText,
  onCloseModal,
  onSubmit,
  isOpen,
  onSignUpClick,
}) {
  const initialValues = getInitialValues("login");

  const { values, handleChange, setValues } = useForm(initialValues);

  useEffect(() => {
    setValues(initialValues);
    // eslint-disable-next-line
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  const isFormFilled = Object.values(values).every(
    (value) => value.trim() !== "",
  );

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      onCloseModal={onCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onSignUpClick={onSignUpClick}
      aditionalBtn={
        <button
          onClick={onSignUpClick}
          type="text"
          className="modal__submit-btn modal__extra-btn"
        >
          or Register
        </button>
      }
      isFormFilled={isFormFilled}
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
          type="password"
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
  );
}
