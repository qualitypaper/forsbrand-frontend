import "./Card.scss";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";
import Skeleton from '@mui/material/Skeleton';

function Card({ card, onPlus }) {
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = card.images[0];
        img.onload = () => {
            setLoading(false);
        };
    }, [card.images[0]]);

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

    return (
        <div className={`card ${loading ? 'loading' : ''}`}>
            {loading ? (
                <div className="loading-skeleton">
                    <Skeleton variant="rectangular" height={200} width={300} />
                </div>
            ) : (
                <>
                    <Link key={card.id} to={`/product-page/${card.id}`}>
                        <div className="image-container">
                            <img
                                className="header__clothes-card-img"
                                src={isHovered ? card.images[1] : card.images[0]}
                                alt=""
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            />

                        </div>
                        <p className="price_text">
                            <SomeComponent currentClothing={card} />

                        </p>
                    </Link>
                    <div className="card-button-container">
                        <button onClick={clickHandler} className="card-button">
                            Переглянути
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
