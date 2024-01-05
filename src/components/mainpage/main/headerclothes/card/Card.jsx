
import "./Card.scss"
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";

function Card({ card, onPlus }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const clickHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        onPlus(card);
    };

    const {
        images
    } = card;

    const imgSrc = isHovered ? images[1] : images[0];

    return (
        <div className="card">
            <Link key={card.id} to={`/product-page/${card.id}`}>
            <img
                className="header__clothes-card-img"
                src={imgSrc}
                alt=""
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
            <p className="price_text"><SomeComponent currentClothing={card} /></p>
            </Link>
            <div className="card-button-container">
                <button
                    onClick={clickHandler}
                    className="card-button"
                >
                    Переглянути
                </button>
            </div>
        </div>
    );
}

export default Card;
