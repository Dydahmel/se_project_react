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
import { Route, Switch, useHistory } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "./AddItemModal/AddItemModal";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { api } from "../utils/api";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";
import { auth } from "../utils/auth";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfileModal from "./Profile/EditProfileModal/EditProfileModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  //Modal handlers
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

  function handleSignUpModal() {
    setActiveModal("signUp");
  }

  function handleLoginModal() {
    setActiveModal("login");
  }

  function handleDeleteModal() {
    setActiveModal("confirmation");
  }

  function handleEditModal() {
    setActiveModal("editProfile");
  }

  //Closing modals
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

  //handlers
  function handleToggleSwitchChange() {
    if (currentTemperatureUnit === "C") {
      setCurrentTempUnit("F");
    }
    if (currentTemperatureUnit === "F") {
      setCurrentTempUnit("C");
    }
  }

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

  function handleEditProfileSubmit(input) {
    const updatedUser = {
      name: input.name,
      avatar: input.avatar,
    };
    const token = localStorage.getItem("jwt");
    function makeRequest() {
      return auth.updateUser(updatedUser, token).then((res) => {
        setCurrentUser(res.data);
        console.log(res.data);
      });
    }
    handleSubmit(makeRequest);
  }

  function handleSignUpSubmit(input) {
    const newUser = {
      email: input.email,
      password: input.password,
      name: input.name,
      avatar: input.avatar,
    };
    function makeRequest() {
      return auth.signUp(newUser).then((res) => {
        localStorage.setItem("jwt", res.token);
      });
    }
    handleSubmit(makeRequest);
  }

  function handleLoginSubmit(input) {
    const user = {
      email: input.email,
      password: input.password,
    };
    function makeRequest() {
      return auth
        .signIn(user)
        .then((res) => {
          localStorage.setItem("jwt", res.token);
        })
        .then(() => {
          const token = localStorage.getItem("jwt");
          auth.checkCurrentUser(token).then((data) => {
            setCurrentUser(data.data);
            history.push("/profile");
            setIsLoggedIn(true);
          });
        });
    }
    handleSubmit(makeRequest);
  }

  function handleAddFormSubmit(input) {
    const token = localStorage.getItem("jwt")
    const newItem = {
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    };
    // here we create a function that returns a promise
    function makeRequest() {
      console.log(newItem)
      return api.addItems(newItem, token).then((item) => {
        setClothingItems([item.data, ...clothingItems]);
      });
    }
    // here we call handleSubmit passing the request
    handleSubmit(makeRequest);
  }

  function handleLogOut() {
    // Clear authentication token from local storage
    localStorage.removeItem("jwt");

    //Reset user-related state
    setCurrentUser(null);

    // Redirect to login page
    window.location.href = "/";
  }

  function handleDeleteCard() {
    const token = localStorage.getItem("jwt")
    function makeRequest() {
      return api.removeItem(selectedCard._id, token).then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== selectedCard._id),
        );
      });
    }
    handleSubmit(makeRequest);
  }

  useEffect(() => {
    const token = localStorage?.getItem("jwt");
    if (token) {
      console.log("Token is valid, welcome user!");
      auth
        .checkCurrentUser(token)
        .then((data) => {
          //console.log(data.data)
          setCurrentUser(data.data);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    } else {
      console.log("Please, log in to continue");
    }
  }, []);

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

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    console.log(isLiked);
    console.log(id);
    // Check if this card is now liked
    if (!isLiked) {
      // if so, send a request to add the user's id to the card's likes array
      api
        // the first argument is the card's id
        .addCardLike(id, token)
        .then((res) => {
          const updatedCard = res.data;
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard : c)),
          );
        })
        .catch((err) => console.log(err));
    }
    if (isLiked) {
      // if not, send a request to remove the user's id from the card's likes array
      api
        // the first argument is the card's id
        .removeCardLike(id, token)
        .then((res) => {
          const updatedCard = res.data;
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard : c)),
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className="App">
          <Header
            onCreateModal={handleCreateModal}
            currentLocation={location}
            onSignUpModal={handleSignUpModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
          />
          <Switch>
            <Route exact path="/">
              <Main
                onSelectCard={hadleSelectedCard}
                currentTemperature={temp}
                currentWeather={weather}
                dayLighCondition={dayLight}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
              />
            </Route>
            <Route path="/profile">
              <Profile
                onSelectCard={hadleSelectedCard}
                onCreateModal={handleCreateModal}
                onEditModal={handleEditModal}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
                onLogOut={handleLogOut}
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
              onLoginClick={handleLoginModal}
              title={"Sign up"}
              buttonText={"Next"}
              onCloseModal={handleCloseModal}
              onCloseModalByOverlay={handleOverlayClick}
              onSubmit={handleSignUpSubmit}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onSignUpClick={handleSignUpModal}
              title={"Log in"}
              buttonText={"Log in"}
              onCloseModal={handleCloseModal}
              onCloseModalByOverlay={handleOverlayClick}
              onSubmit={handleLoginSubmit}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              title={"Change profile data"}
              isLoading={isLoading}
              buttonText={isLoading ? "Saving..." : "Save changes"}
              onCloseModal={handleCloseModal}
              onCloseModalByOverlay={handleOverlayClick}
              onSubmit={handleEditProfileSubmit}
            />
          )}
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
