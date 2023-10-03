import React from "react";
import { useMemo, useContext } from "react";
import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTempUnitContext } from "../../context/CurrentTempUnitContext";

function Main({
  currentTemperature,
  onSelectCard,
  currentWeather,
  dayLighCondition,
  clothingItems
}) {
  let weatherCondition = "";
  //using context to get current temperature unit
  const {currentTempUnit } = useContext(CurrentTempUnitContext);
  //pick right value out of object formed by API call
  const temp = currentTemperature?.[currentTempUnit] || 999;
  // using only farenheit units to get weather condition
  const tempNum = parseInt(currentTemperature?.F) || 998;  

  function pickWeatherCondition(currentWeather) {
    if (currentWeather >= 200 && currentWeather < 300) {
      weatherCondition = "storm";
    }
    if (currentWeather >= 300 && currentWeather < 600) {
      weatherCondition = "rainy";
    }
    if (currentWeather >= 600 && currentWeather < 700) {
      weatherCondition = "snow";
    }
    if (currentWeather >= 700 && currentWeather < 800) {
      weatherCondition = "foggy";
    }
    if (currentWeather === 800) {
      weatherCondition = "clear";
    }
    if (currentWeather > 800 && currentWeather < 900) {
      weatherCondition = "cloudy";
    }
    return weatherCondition;
  }

  const weatherType = useMemo(() => {
    if (tempNum >= 86) {
      return "hot";
    } else if (tempNum >= 66 && tempNum <= 85) {
      return "warm";
    } else if (tempNum <= 65) {
      return "cold";
    }  
  }, [tempNum]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={dayLighCondition}
        weather={pickWeatherCondition(currentWeather) || "storm"}
        temperature={temp}
      />
      <section className="card__section">
        <div className="card__weather">
          Today is {temp}/ You may want to wear:
        </div>
        <ul className="card__list">
          {filteredCards.map((card) => {
            return (
              <ItemCard
                card={card}
                onSelectCard={onSelectCard}
                key={card._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
