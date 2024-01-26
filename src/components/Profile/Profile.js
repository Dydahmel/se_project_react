import React from "react";
import "./Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";

export default function Profile({
  onSelectCard,
  onCreateModal,
  onEditModal,
  clothingItems,
  onCardLike,
  onLogOut,
}) {
  return (

    
    <div className="profile">
      <SideBar onEditModal={onEditModal} onLogOut={onLogOut} />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onCardLike={onCardLike}
      />
    </div>
  );
}
