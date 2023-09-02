import React from 'react';
import './WeatherCard.css';


//all possible weather options
const weatherOptions = [
    {url: require ("../../../images/day__sunny.svg").default, day: true, weather: 'sunny'},
    {url: require ("../../../images/day__cloud.svg").default, day: true, weather: 'cloudy'},
    {url: require ("../../../images/day__fog.svg").default, day: true, weather: 'foggy'},
    {url: require ("../../../images/day__rain.svg").default, day: true, weather: 'rainy'},
    {url: require ("../../../images/day__snow.svg").default, day: true, weather: 'snow'}, 
    {url: require ("../../../images/day__storm.svg").default, day: true, weather: 'storm'},
    {url: require ("../../../images/night__moon.svg").default, day: false, weather: 'moon'},
    {url: require ("../../../images/night__cloudy.svg").default, day: false, weather: 'cloudy'},
    {url: require ("../../../images/night__fog.svg").default, day: false, weather: 'foggy'},
    {url: require ("../../../images/night__rain.svg").default, day: false, weather: 'rainy'},
    {url: require ("../../../images/night__snow.svg").default, day: false, weather: 'snow'},
    {url: require ("../../../images/night__storm.svg").default, day: false, weather: 'storm'},
]



//passing weather option from Main.js
function WeatherCard({day, weather}){
    //filtering given options through array with cards
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.weather === weather
    })
    //assign filtered result to variable, so its not gonna brake react code
    const currentImageSrc = imageSrc[0].url || ' '
    return(
        <section className='weather'>
            <div className='weather__temperature'>75 F</div>
            <img className='weather__image' alt='weather-card' src={currentImageSrc}>
                
            </img>
        </section>
        )
};

export default WeatherCard