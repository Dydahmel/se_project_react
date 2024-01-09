import React from "react";
import "./SideBar.css";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
import getAvatarPlaceholder from "../../../utils/avatarPlaceholder";

export default function SideBar({onEditModal}) {
  const {currentUser} = useContext(CurrentUserContext)

  const avatarPlaceholder = getAvatarPlaceholder(currentUser?.name)  
  

  const[imageError, setImageError] = useState(false)

  function handleImgError() {
    setImageError(true)
  }

  return (
    <div className="sidebar">
      <div className="sidebar__user_container">
        { currentUser?.avatar && !imageError ?
        ( <img
          className="sidebar__user-avatar"
          src={currentUser?.avatar}
          alt={currentUser?.name + "'s avatar"}
          onError={handleImgError}
        />) 
        :
        (
          <span className="header__user-avatar" style={{backgroundColor: avatarPlaceholder.backgroundColor}}>
          <p className="header__user-avatar_span">{avatarPlaceholder.firstLetter}</p>
          </span>
        )
        }
        <p className="sidebar__user-name">{currentUser?.name}</p>
      </div>
      <div className="sidebar__btn-container">
        <button type="text" className="sidebar__edit-btn" onClick={onEditModal}>
          Change profile data
        </button>
        <button type="text" className="sidebar__edit-btn">
          Log out
        </button>
      </div>
    </div>
  );
}
