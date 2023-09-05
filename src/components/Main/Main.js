import React from "react";
import './Main.css';
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import defaultClothingItems from './ItemCard/defaultItemas';


function Main({currentTemperature, onSelectCard}){
    
    return(
        <main className="main">
            <WeatherCard day={false} weather='storm' temperature={currentTemperature}/>
            <section className='card__section'>
                <div className='card__weather'>Today is {currentTemperature} / You may want to wear:</div>
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