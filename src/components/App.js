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
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "./AddItemModal/AddItemModal";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { api } from "../utils/api";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";
import { auth } from "../utils/auth";

//Backend start
// database start
// "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"
// server start
// npm run dev

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState(0);
  const [dayLight, setDayLight] = useState({});
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  function handleSignUpModal(){
    setActiveModal("signUp");
  }

  function handleLoginModal(){
    setActiveModal("login");
  }

  function handleDeleteModal() {
    setActiveModal("confirmation");
  }

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      handleCloseModal();
    }
  };

  function handleToggleSwitchChange() {
    if (currentTemperatureUnit === "C") {
      setCurrentTempUnit("F");
    }
    if (currentTemperatureUnit === "F") {
      setCurrentTempUnit("C");
    }
  }

  // function storeToken(token){
  //   localStorage.setItem("jwt", res.token); 
  // }

  //universal handler for all submits
  function handleSubmit(request) {
    // start loading
    setIsLoading(true);
    request()
      // we need to close only in `then`
      .then(handleCloseModal)
      // we need to catch possible errors
      // console.error is used to handle errors if you don’t have any other ways for that
      .catch(console.error)
      // and in finally we need to stop loading
      .finally(() => setIsLoading(false));
  }

  function handleSignUpSubmit(input){
    const newUser = {
      email: input.email,
      password: input.password,
      name: input.name, 
      avatar: input.avatar,
    }
    function makeRequest(){
      return auth.signUp(newUser).then((res) =>{
        localStorage.setItem("jwt", res.token)
        console.log(res.token)
        
      })
    }
    handleSubmit(makeRequest)
  }

  function handleLoginSubmit(input){
    const user = {
      email: input.email,
      password: input.password,
    }
    function makeRequest(){
      return auth.signIn(user).then((res) =>{
        localStorage.setItem("jwt", res.token)
        console.log(res)        
      })
    }
    handleSubmit(makeRequest)
  }

  
  function handleAddFormSubmit(input) {
    const newItem = {
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    };
    // here we create a function that returns a promise
    function makeRequest() {
      return api.addItems(newItem).then((item) => {
        setClothingItems([item, ...clothingItems]);
      });
    }
    // here we call handleSubmit passing the request
    handleSubmit(makeRequest);
  }

  function handleDeleteCard() {
    function makeRequest() {
      return api.removeItem(selectedCard._id).then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== selectedCard._id),
        );
      });
    }
    handleSubmit(makeRequest);
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
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((data) => {        
        setClothingItems(data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="App">
        <Header 
        onCreateModal={handleCreateModal} 
        currentLocation={location} 
        onSignUpModal={handleSignUpModal}
        onLoginModal={handleLoginModal}
        />
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
            buttonText={isLoading ? "Saving..." : "Add garment"}
            isLoading={isLoading}
            isOpen={activeModal === "create"}
            onCloseModal={handleCloseModal}
            onCloseModalByOverlay={handleOverlayClick}
            onSubmit={handleAddFormSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onCloseModal={handleCloseModal}
            onCloseModalByOverlay={handleOverlayClick}
            onDelete={handleDeleteModal}
          />
        )}
        {activeModal === "confirmation" && (
          <ConfirmationModal
            onCloseModal={handleCloseModal}
            onCloseModalByOverlay={handleOverlayClick}
            onCancelClick={() => hadleSelectedCard(selectedCard)}
            selectedCard={selectedCard}
            onYesClick={handleDeleteCard}
            confirmationButtonText={
              isLoading ? "Deleting..." : "Yes, delete item"
            }
          />
        )}
        {activeModal === "signUp" && (
          <RegisterModal
          title={"Sign up"}
          buttonText={"Next"}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
          onSubmit={handleSignUpSubmit}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
          title={"Log in"}
          buttonText={"Log in"}
          onCloseModal={handleCloseModal}
          onCloseModalByOverlay={handleOverlayClick}
          onSubmit={handleLoginSubmit}
          />
        )
        }
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
