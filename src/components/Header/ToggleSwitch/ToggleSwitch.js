import React, { useContext } from "react";
import "./ToggleSwitch.css"
import { CurrentTempUnitContext } from "../../../context/CurrentTempUnitContext";

export default function ToggleSwitch(){
    const {currentTempUnit, handleToggleTempUnit } = useContext(CurrentTempUnitContext)
    return(
        <label className="toggle__switch-container">
        <input className="toggle__switch-box" 
        type="checkbox" 
        onChange={handleToggleTempUnit}/>
        <span className={currentTempUnit === "F" 
        ? "switch__slider switch__slider-F" : "switch__slider switch__slider-C"}></span>
        <p className={`switch__temp-F ${currentTempUnit === 'F' && "switch__active"}` }>F</p>
        <p className={`switch__temp-C ${currentTempUnit === 'C' && "switch__active"}` }>C</p>
        </label>
    )
}