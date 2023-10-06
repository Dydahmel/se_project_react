import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


export default function AddItemModal({
    title,
    buttonText,
    onCloseModal,
    onCloseModalByOverlay,
    onSubmit,
    isOpen
})
{

    const[name,setName] = useState("");
    const[imageUrl,setUrl] = useState("");
    const[weather,setItemWeather] = useState("");
    function handleAddName(evt){
        setName(evt.target.value)        
    }
    function handleAddUrl(evt){
        setUrl(evt.target.value)        
    }
    function handleAddItemWeather(evt){
        setItemWeather(evt.target.value)        
    }

    function handleSubmit(evt){
      evt.preventDefault()      
      onSubmit({name, weather, imageUrl})
    }

 
    useEffect(()=>{
        if(isOpen){
            setName("")
            setUrl("")
            setItemWeather("")
        }
    },[isOpen])

    return(
        <ModalWithForm
          title={title}
          buttonText={buttonText}
          onCloseModal={onCloseModal}
          onCloseModalByOverlay={onCloseModalByOverlay}
          onSubmit={(evt) => handleSubmit(evt)}
          isOpen={isOpen}          
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
              value={name}
              onChange={handleAddName}
            />
          </label>
          <label className="form__label text__label">
            Image
            <input
              type="url"
              name="link"
              minLength="1"
              maxLength="300"
              className="text__input"
              placeholder="Image URL"
              value={imageUrl}
              onChange={handleAddUrl}

            />
          </label>
          <div className="form__radio-container">
            <p className="form__subtitle">Select the weather type:</p>
            <div>
              <div>
                <label className="form__label radio__label" id="hot">
                  <input
                    type="radio"
                    id="hot"
                    value="hot"
                    className="radio__input"
                    name="radio__input" 
                    checked={weather === "hot"} 
                    onChange={handleAddItemWeather}                  
                  />
                  Hot
                </label>
              </div>
              <div>
                <label className="form__label radio__label" id="warm">
                  <input
                    type="radio"
                    id="warm"
                    value="warm"
                    className="radio__input"
                    name="radio__input"
                    checked={weather === "warm"}
                    onChange={handleAddItemWeather}  
                  />
                  Warm
                </label>
              </div>
              <div>
                <label className="form__label radio__label" id="cold">
                  <input
                    type="radio"
                    id="cold"
                    value="cold"
                    className="radio__input"
                    name="radio__input"
                    checked={weather === "cold"}
                    onChange={handleAddItemWeather}  
                  />
                  Cold
                </label>
              </div>
            </div>
          </div>
        </ModalWithForm>
    )
}