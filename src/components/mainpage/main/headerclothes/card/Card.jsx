import "./Card.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";
import { message, Skeleton } from 'antd';

function Card({ card, onPlus }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div className="card">
            <Link key={card.id} to={`/product-page/${card.id}`}>
                {images && !isImageLoaded ? (
                    <Skeleton variant="rectangular" width={310} height={310} />
                ) : (
                    <img
                        className="header__clothes-card-img"
                        src={imgSrc}
                        alt=""
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onLoad={handleImageLoad}
                    />
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