<div>
{/* //ModalWithForm */}
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
      </div>
</div>


{/* //ItemModal */}
<div className={`modal`} onClick={onCloseModalByOverlay}>
      <div className="modal__content modal__content-img">
        <button
          type="button"
          onClick={onCloseModal}
          className="modal__close-btn"
        />
        <img
          alt={selectedCard.name}
          src={selectedCard.link || selectedCard.imageUrl}
          className="modal__img"
        />
        <div className="modal__caption">
          <div>
            <p className="modal__text ">{selectedCard.name}</p>
            <p className="modal__text">Weather: {selectedCard.weather}</p>
          </div>
          <button
            type="text"
            className={itemDeleteButtonClassName}
            onClick={() => onDelete(selectedCard)}
          >
            Delete item
          </button>
        </div>
      </div>
</div>

</div>