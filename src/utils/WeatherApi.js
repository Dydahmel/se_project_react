import { latitude, longitude, APIkey } from "./constants";
import { request } from "./api";

//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

export function getWeather() {
  const weatherApi = request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  );
  return weatherApi;
}

export function parseWeatherTemp(data) {
  const temperatureObj = {
    F: `${Math.round(data.main.temp)}°F`,
    C: `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`,
  };
  return temperatureObj;
}

export function parseWeatherCondition(data) {
  const weather = data.weather;
  const weatherObject = weather[0];
  const weatherCondition = weatherObject.id;
  return weatherCondition;
}

export function parseDaytimeCondition(data) {
  const sys = data.sys;
  const dayLighCondition = {};
  dayLighCondition.sunrise = sys.sunrise;
  dayLighCondition.sunset = sys.sunset;

  return pickDayCondition(dayLighCondition);
}

function pickDayCondition(dayLighCondition) {
  // eslint-disable-next-line
  let day = null;
  if (
    dayLighCondition.sunrise <
    Math.ceil(Date.now() / 1000) <
    dayLighCondition.sunset
  ) {
    return (day = true);
  } else {
    // eslint-disable-next-line
    return (day = false);
  }
}

export function parseLocation(data) {
  const location = data.name;
  return location;
}
