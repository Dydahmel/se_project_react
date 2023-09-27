import React from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../../utils/constants";

//passing weather option from Main.js
function WeatherCard({ day, weather = "", temperature }) {
  //filtering given options through array with cards
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.weather === weather;
  });

  //assign filtered result to variable, so its not gonna brake react code
  const currentImageSrc = imageSrc.length > 0 ? imageSrc[0].url : "";

  return (
    <section className="weather">
      <div className="weather__temperature">{temperature}</div>
      <img
        className="weather__image"
        alt="weather-card"
        src={currentImageSrc}
      ></img>
    </section>
  );
}

export default WeatherCard;

//imageSrc[0].url ||
