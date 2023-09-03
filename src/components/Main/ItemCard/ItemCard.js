import React from 'react';
import './ItemCard.css';
import defaultClothingItems from './defaultItemas';



function ItemCard({temperature}){
    return(
        <section className='card__section'>
            <div className='card__weather'>Today is {temperature} / You may want to wear:</div>
            <ul className='card__list'>
            {defaultClothingItems.map((x) =>{
                console.log(x)
                return(
                    <li className='card__item'>
                        <div>
                            <img src={x.link} className='card__image' alt='card'></img>
                        </div>
                        <div className='card__name'>
                            <span className='card__name-wrapper'>{x.name}</span>
                        </div>
                    </li>)
            })}
            </ul>
        </section>
    )
}



export default ItemCard