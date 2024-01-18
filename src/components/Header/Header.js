import React from "react";
import "./Header.css";
import headerLogo from "../../images/header__logo.svg";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState } from "react";
import getAvatarPlaceholder from "../../utils/avatarPlaceholder";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  onCreateModal,
  currentLocation,
  onSignUpModal,
  onLoginModal,
  isLoggedIn,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const avatarPlaceholder = getAvatarPlaceholder(currentUser?.name);

  const [imageError, setImageError] = useState(false);

  function handleImgError() {
    setImageError(true);
  }

  
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
          {isLoggedIn ? (
            <button
              type="text"
              className="header__add-btn"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          ) : (
            <button
              type="text"
              className="header__add-btn"
              onClick={onSignUpModal}
            >
              Sign Up
            </button>
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <Link to="/profile" className="header__user-name">
              {currentUser?.name}
            </Link>
          ) : (
            <button
              type="text"
              className="header__add-btn"
              onClick={onLoginModal}
            >
              Log in
            </button>
          )}
        </div>

        {isLoggedIn ? (
          currentUser?.avatar && !imageError ? (
            <img
              className="header__user-avatar"
              src={currentUser?.avatar}
              alt={currentUser?.name + "'s avatar"}
              onError={handleImgError}
            ></img>
          ) : (
            <span
              className="header__user-avatar"
              style={{ backgroundColor: avatarPlaceholder.backgroundColor }}
            >
              <p className="header__user-avatar_span">
                {avatarPlaceholder.firstLetter}
              </p>
            </span>
          )
        ) : (
          <p className="header__user-avatar_placeholder"></p>
        )}
      </div>
    </header>
  );
}

export default Header;
