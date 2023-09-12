import { latitude, longitude, APIkey } from "./constants";

//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

export function getWeather() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
}

export function parseWeatherTemp(data) {
  const main = data.main;
  const temperature = Math.ceil(main.temp);
  return temperature;
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
