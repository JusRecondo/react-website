import React, { useEffect, useState } from 'react';
import api from "../api";
import CardItem from './CardItem';
import './Cards.css';


const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.get("cards").then(setCards);
    }, []);


    return (
        <section className="cards">
            <h2>Check out this destinations!</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {cards.map((card) => (
                                <CardItem 
                                key={card.id}
                                path={card.path} 
                                src={card.img}
                                text={card.text}
                                label={card.label}/>
                            ))}
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Cards;
