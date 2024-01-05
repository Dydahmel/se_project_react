import React from "react";
import "./Header.css";
import headerLogo from "../../images/header__logo.svg";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState } from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ onCreateModal, currentLocation, onSignUpModal, onLoginModal, isLoggedIn }) {  
  const {currentUser} = useContext(CurrentUserContext)
  
  // Function to extract the first letter from the user's name
  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
 };
  
    // Function to generate a random color for the background
  const getRandomColor = () => {
    const colors = ['#ff7675', '#74b9ff', '#a29bfe', '#00cec9', '#fdcb6e'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const[imageError, setImageError] = useState(false)

  function handleImgError() {
    setImageError(true)
  }


  console.log(currentUser)
  console.log(isLoggedIn)  
  return (
    <header className="header">
      <div className="header__logo-date_container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="header-logo" />
        </Link>
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__button-user_container">
        <ToggleSwitch />
        <div>
          { isLoggedIn ? 
          (<button type="text" className="header__add-btn" onClick={onCreateModal}>
          + Add clothes
          </button>)            
          :          
          (<button type="text" className="header__add-btn" onClick={onSignUpModal}>
          Sign Up
          </button>)}
        </div>
        <div>

          { isLoggedIn ?
           ( <Link to="/profile" className="header__user-name">
              {currentUser?.name }
            </Link>)
            : 
            (<button type="text" className="header__add-btn" onClick={onLoginModal}>
                Log in
            </button>)
          }
        </div>
        
        { currentUser?.avatar && !imageError ?
          (<img
          className="header__user-avatar"
          src={currentUser?.avatar}
          alt="user-avatar"
          onError={handleImgError}
        ></img>)
        :
          (
            <span className="header__user-avatar" style={{backgroundColor: getRandomColor()}}>
              {getFirstLetter(currentUser?.name)}
            </span>
          )
      }
      </div>
    </header>
  );
}

export default Header;
