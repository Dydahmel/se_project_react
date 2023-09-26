import React from "react";
import "./Header.css";
import headerLogo from "../../images/header__logo.svg";
import headerAvatar from "../../images/header__avatar.svg";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";


const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ onCreateModal, currentLocation }) {
  return (
    <header className="header">
      <div className="header__logo-date_container">
        <img className="header__logo" src={headerLogo} alt="header-logo" />
        <div className="header__date">
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__button-user_container">
        <ToggleSwitch/>
        <button type="text" className="header__add-btn" onClick={onCreateModal}>
          + Add clothes
        </button>
        <p className="header__user-name">Name and Last name</p>
        <img
          className="header__user-avatar"
          src={headerAvatar}
          alt="user-avatar"
        ></img>
      </div>
    </header>
  );
}

export default Header;
