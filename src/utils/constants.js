export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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
export const buttonText = "Add garment";
