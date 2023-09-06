import React from "react";
import './Main.css';
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import defaultClothingItems from '../../util/constants';


function Main({currentTemperature, onSelectCard, currentWeather}){

    let weatherCondition = ''
    function pickWeatherCondition(currentWeather){
        
        if(currentWeather >= 200 && currentWeather < 300){
            weatherCondition = 'storm'
        }
        if(currentWeather >= 300 && currentWeather < 600){
            weatherCondition = 'rainy'
        }
        if(currentWeather >= 600 && currentWeather < 700){
            weatherCondition = 'snow'
        }
        if(currentWeather >= 700 && currentWeather < 800){
            weatherCondition = 'foggy'
        }
        if(currentWeather === 800){
            weatherCondition = 'clear'
        }
        if(currentWeather > 800 && currentWeather < 900){
            weatherCondition = 'cloudy'
        }
        return weatherCondition
    }

    pickWeatherCondition(currentWeather)
    console.log(weatherCondition)
    
    
    return(
        <main className="main">
            <WeatherCard day={false} weather= {weatherCondition} temperature={currentTemperature}/>
            <section className='card__section'>
                <div className='card__weather'>Today is {currentTemperature}°F/ You may want to wear:</div>
                <ul className='card__list'>
                    {defaultClothingItems.map((card) =>{               
                        return( <ItemCard card={card} onSelectCard={onSelectCard}/>)
                    })}
                </ul>
            </section>            
        </main>
    )
}


export default Main