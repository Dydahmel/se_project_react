import React from "react";
import './Profile.css';
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";


export default function Profile({onSelectCard, onCreateModal, clothingItems}){
    return(
        <div className="profile">
            <SideBar/>
            <ClothesSection 
            onSelectCard={onSelectCard}
            onCreateModal={onCreateModal}
            clothingItems={clothingItems}/>
        </div>
    )
}