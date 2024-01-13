import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";
import Skeleton from '@mui/material/Skeleton';

function Card({ card, onPlus }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = card.images[0];

        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, [card.images]);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const clickHandler = (event) => {
        onPlus(card);

        event.preventDefault();
        event.stopPropagation();
    };

    const { images } = card;
    const imgSrc = isHovered ? images[1] : images[0];

    return (
        <div className="card">
            <Link key={card.id} to={`/product-page/${card.id}`}>
                {isImageLoaded ? (
                    <img
                        className="header__clothes-card-img"
                        src={imgSrc}
                        alt=""
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />
                ) : (
                    <Skeleton animation="wave" width={310} height={310} />
                )}
                <p className="price_text"><SomeComponent currentClothing={card}/></p>
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
