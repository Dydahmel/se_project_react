import React from "react";
import "./SideBar.css";
import headerAvatar from "../../../images/header__avatar.svg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__user-avatar"
        src={headerAvatar}
        alt="user-avatar"
      />
      <p className="sidebar__user-name">Name and Last name</p>
    </div>
  );
}
