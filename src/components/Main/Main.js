import React from "react";
import { useMemo } from "react";
import "./Main.css";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({
  currentTemperature,
  onSelectCard,
  currentWeather,
  dayLighCondition,
}) {
  let weatherCondition = "";

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
    if (currentTemperature >= 86) {
      return "hot";
    } else if (currentTemperature >= 66 && currentTemperature <= 85) {
      return "warm";
    } else if (currentTemperature <= 65) {
      return "cold";
    }
  }, [currentTemperature]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={dayLighCondition}
        weather={pickWeatherCondition(currentWeather) || "storm"}
        temperature={currentTemperature}
      />
      <section className="card__section">
        <div className="card__weather">
          Today is {currentTemperature}°F/ You may want to wear:
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
