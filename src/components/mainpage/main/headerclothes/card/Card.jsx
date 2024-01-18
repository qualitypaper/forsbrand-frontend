import "./Card.scss";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import SomeComponent from "../../../../../assets/constant";
import SkeletonImage from "antd/es/skeleton/Image";

function Card({card, onPlus}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleMouseOver = () => {
        card.images.length > 1 && setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const clickHandler = (event) => {
        onPlus(card);

        event.preventDefault();
        event.stopPropagation();
    };

    const {images} = card;
    const imgSrc = isHovered ? images[1] : images[0];

    useEffect(() => {
        const cacheImages = async (images) => {
            const promises = await images.map(image => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = () => resolve();
                    img.onerror = () => reject();
                });
            });
            await Promise.all(promises);

            setIsLoading(false);
        };

        cacheImages(card.images).then(r => console.log(r));
    }, [card.images]);

    return (
        <div className="card">
            <Link key={card.id} to={`/product-page/${card.id}`}>
                {!isLoading && images && (
                    <img
                        className="header__clothes-card-img"
                        loading="lazy"
                        src={imgSrc}
                        alt=""
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    />
                )}
                {
                    isLoading && (
                       <SkeletonImage style={{width: "310px", height: "310px"}} />
                    )
                }
                <p className="price_text">
                    <SomeComponent currentClothing={card}/>
                </p>
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