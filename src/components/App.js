import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ItemModal from "./ItemModal/ItemModal";
import Profile from "./Profile/Profile";
import {
  getWeather,
  parseWeatherCondition,
  parseWeatherTemp,
  parseDaytimeCondition,
  parseLocation,
} from "../utils/WeatherApi";
import { CurrentTempUnitContext } from "../context/CurrentTempUnitContext";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "./AddItemModal/AddItemModal";
import { defaultClothingItems } from "../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(0);
  const [dayLight, setDayLight] = useState({});
  const [location, setLocation] = useState("");
  const[currentTempUnit, setCurrentTempUnit] = useState('F');
  const[clothingItems, setClothingItems] = useState(defaultClothingItems)

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

  function handleToggleTempUnit(){
      if(currentTempUnit === 'C'){
        setCurrentTempUnit('F')            
    }
    if(currentTempUnit === 'F'){
        setCurrentTempUnit('C')            
    }
  }  

  function handleSubmit(evt, item){
    evt.preventDefault()
    setClothingItems([item, ...clothingItems])
    console.log(clothingItems)
    return clothingItems    
  }

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
    <CurrentTempUnitContext.Provider value={ {currentTempUnit , handleToggleTempUnit} }>
    <div className="App">
      <Header onCreateModal={handleCreateModal} currentLocation={location} />
      <Switch>
        <Route exact path="/">
          <Main
            onSelectCard={hadleSelectedCard}
            currentTemperature={temp}
            currentWeather={weather}
            dayLighCondition={dayLight}
            clothingItems={clothingItems}
          />
        </Route>
        <Route path="/profile">
          <Profile
          onSelectCard={hadleSelectedCard}
          onCreateModal={handleCreateModal}
          clothingItems={clothingItems}          
          />
        </Route>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          title={"New garment"}
          buttonText={"Add garment"}
          isOpen ={activeModal === "create"}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
          onSubmit={handleSubmit}
        />
                  
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
        />
      )}
    </div>
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
