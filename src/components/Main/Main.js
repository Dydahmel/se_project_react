import React from "react";
import './Main.css';
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";


function Main(){
    const currentTemperature = '75°F'
    return(
        <main className="main">
            <WeatherCard day={false} weather='storm' temperature={currentTemperature}/>
            <ItemCard temperature={currentTemperature}/>
        </main>
    )
}


export default Main