import React from "react";
import '../ModalWithForm/ModalWithForm.css';

function ItemModal({selectedCard, onCloseModal}){
    console.log("itemModal is working")
    return(
        <div className={`modal`}>
            <div className="modal__content modal__content-img">
                <button type="button" onClick={onCloseModal} className="modal__close-btn"></button>
                <img alt="item" src={selectedCard.link} className="modal__img"/>
                <div className="modal__caption">
                    <p className="modal__text ">{selectedCard.name}</p>
                    <p className="modal__text">Weather: {selectedCard.weather}</p>
                </div>
                
                
            </div>
        </div>
    )
};


export default ItemModal

