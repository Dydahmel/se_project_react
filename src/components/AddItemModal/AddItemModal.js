import React, { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import { getInitialValues } from "../../utils/initialValues";

export default function AddItemModal({
  title,
  buttonText,
  onCloseModal,
  onSubmit,
  isOpen,
}) {
  const initialValues = getInitialValues("addItem");
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
        Image
        <input
          type="url"
          name="imageUrl"
          minLength="1"
          maxLength="300"
          className="text__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <div className="form__radio-container">
        <p className="form__subtitle">Select the weather type:</p>
        <div>
          <div>
            <label className="form__label radio__label">
              <input
                type="radio"
                id="hot"
                value="hot"
                className="radio__input"
                name="weather"
                checked={values.weather === "hot"}
                onChange={handleChange}
              />
              Hot
            </label>
          </div>
          <div>
            <label className="form__label radio__label">
              <input
                type="radio"
                id="warm"
                value="warm"
                className="radio__input"
                name="weather"
                checked={values.weather === "warm"}
                onChange={handleChange}
              />
              Warm
            </label>
          </div>
          <div>
            <label className="form__label radio__label">
              <input
                type="radio"
                id="cold"
                value="cold"
                className="radio__input"
                name="weather"
                checked={values.weather === "cold"}
                onChange={handleChange}
              />
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
}
