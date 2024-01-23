import React from "react";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useEffect, useContext } from "react";
import useForm from "../../../hooks/useForm";

function EditProfileModal({
  title,
  buttonText,
  onCloseModal,
  onSubmit,
  isOpen,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const initialValues = {
    name: currentUser.name,
    avatar: currentUser.avatar,
  };

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
      isFormFilled={isFormFilled}
    >
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
  );
}

export default EditProfileModal;
