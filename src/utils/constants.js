//all possible weather options
export const weatherOptions = [
  {
    url: require("../images/day__sunny.svg").default,
    day: true,
    weather: "clear",
  },
  {
    url: require("../images/day__cloud.svg").default,
    day: true,
    weather: "cloudy",
  },
  {
    url: require("../images/day__fog.svg").default,
    day: true,
    weather: "foggy",
  },
  {
    url: require("../images/day__rain.svg").default,
    day: true,
    weather: "rainy",
  },
  {
    url: require("../images/day__snow.svg").default,
    day: true,
    weather: "snow",
  },
  {
    url: require("../images/day__storm.svg").default,
    day: true,
    weather: "storm",
  },
  {
    url: require("../images/night__moon.svg").default,
    day: false,
    weather: "clear",
  },
  {
    url: require("../images/night__cloudy.svg").default,
    day: false,
    weather: "cloudy",
  },
  {
    url: require("../images/night__fog.svg").default,
    day: false,
    weather: "foggy",
  },
  {
    url: require("../images/night__rain.svg").default,
    day: false,
    weather: "rainy",
  },
  {
    url: require("../images/night__snow.svg").default,
    day: false,
    weather: "snow",
  },
  {
    url: require("../images/night__storm.svg").default,
    day: false,
    weather: "storm",
  },
];

export const latitude = 40.6;
export const longitude = -73.95;
export const APIkey = "89c0092216c33711bbf4446badc558c2";
