//all possible weather options
import daySunny from "../images/day__sunny.svg";
import day__cloud from "../images/day__cloud.svg";
import day__fog from "../images/day__fog.svg";
import day__rain from "../images/day__rain.svg"
import day__snow from "../images/day__snow.svg"
import day__storm from "../images/day__snow.svg"
import night__moon from "../images/night__moon.svg"
import night__cloudy from "../images/night__cloudy.svg"
import night__fog from "../images/night__fog.svg"
import night__rain from "../images/night__rain.svg"
import night__snow from "../images/night__snow.svg"
import night__storm from "../images/night__storm.svg"


export const weatherOptions = [
  {
    url: daySunny,
    day: true,
    weather: "clear",
  },
  {
    url: day__cloud,
    day: true,
    weather: "cloudy",
  },
  {
    url: day__fog,
    day: true,
    weather: "foggy",
  },
  {
    url: day__rain,
    day: true,
    weather: "rainy",
  },
  {
    url: day__snow,
    day: true,
    weather: "snow",
  },
  {
    url: day__storm,
    day: true,
    weather: "storm",
  },
  {
    url: night__moon,
    day: false,
    weather: "clear",
  },
  {
    url: night__cloudy,
    day: false,
    weather: "cloudy",
  },
  {
    url: night__fog,
    day: false,
    weather: "foggy",
  },
  {
    url: night__rain,
    day: false,
    weather: "rainy",
  },
  {
    url: night__snow,
    day: false,
    weather: "snow",
  },
  {
    url: night__storm,
    day: false,
    weather: "storm",
  },
];

export const latitude = 40.6;
export const longitude = -73.95;
export const APIkey = "89c0092216c33711bbf4446badc558c2";
export const initialValues = {
  name: "",
  weather: "",
  imageUrl: "",
};
