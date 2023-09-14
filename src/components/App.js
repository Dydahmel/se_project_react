import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import {
  getWeather,
  parseWeatherCondition,
  parseWeatherTemp,
  parseDaytimeCondition,
  parseLocation,
} from "../utils/WeatherApi";
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(0);
  const [dayLight, setDayLight] = useState({});
  const [location, setLocation] = useState("");

  function handleCreateModal() {
    setActiveModal("create");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function hadleSelectedCard(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (!activeModal) return;

    // Function to handle ESC key press
    const handleEscKey = (event) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    // Attach event listeners when the component mounts
    document.addEventListener("keydown", handleEscKey);
    return () => {
      // Remove event listeners when the component unmounts
      document.removeEventListener("keydown", handleEscKey);
    };
    // eslint-disable-next-line
  }, [activeModal]);

  useEffect(() => {
    getWeather()
      .then((data) => {
        parseWeatherCondition(data);
        const currentTemperature = parseWeatherTemp(data);
        setTemp(currentTemperature);
        const weatherCondition = parseWeatherCondition(data);
        setWeather(weatherCondition);
        const dayLighCondition = parseDaytimeCondition(data);
        setDayLight(dayLighCondition);
        const currentLocation = parseLocation(data);
        setLocation(currentLocation);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Main
        onSelectCard={hadleSelectedCard}
        currentTemperature={temp}
        currentWeather={weather}
        dayLighCondition={dayLight}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title={"New garment"}
          buttonText={"Add garment"}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
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
            />
          </label>
          <label className="form__label text__label">
            Image
            <input
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              className="text__input"
              placeholder="Image URL"
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
                  />
                  Cold
                </label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
        />
      )}
    </div>
  );
}

export default App;
