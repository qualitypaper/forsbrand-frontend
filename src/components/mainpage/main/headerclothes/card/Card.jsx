import "./Card.scss";
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";
import Img from "../../../../img/img";
import {Spin} from "antd";
function Card({ card, onPlus }) {
    const [isHovered, setIsHovered] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const { images } = card;
        if (images && images.length > 0) {
            const imgs = images[0];
            cacheImages([imgs]);
        }
    }, [card]);

    const cacheImages = (srcArray) => {
        const promises = srcArray.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(promises)
            .then(() => {
                setLoad(false);
            })
            .catch((error) => {
                console.error('Error caching images:', error);
            });
    };

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
                {images && (
                    load ? <div><Spin size="large"/></div> :
                        <img
                            className="header__clothes-card-img"
                            src={imgSrc}
                            alt=""
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        />
                )}
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