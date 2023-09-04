import React from "react";
import './Header.css';
import header__logo from '../../images/header__logo.svg'
import header__avatar from '../../images/header__avatar.svg'

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  

function Header({onCreateModal}) {
    return (
      <header className="header">
        <div className="header__logo-date_container">
        <img className="header__logo" src={header__logo} alt="header-logo" />
        <div className="header__date">{currentDate}, Hardcoded NYC</div>
        </div>
        <div className="header__button-user_container">
            <button type="text" className="header__add-btn" onClick={onCreateModal}>+ Add clothes</button>
            <p className="header__user-name">Name and Last name</p>
            <img className="header__user-avatar" src={header__avatar} alt="user-avatar"></img>
        </div>


        
      </header>
    );
}

export default Header