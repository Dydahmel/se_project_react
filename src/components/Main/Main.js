import React from "react";
import './Main.css';
import WeatherCard from "./WeatherCard/WeatherCard";


function Main(){
    return(
        <main className="main">
            <WeatherCard day={false} weather='storm'/>
            Main
        </main>
    )
}


export default Main