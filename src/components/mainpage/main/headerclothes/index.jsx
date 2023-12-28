import React from 'react'
import "./HeaderClothes.scss";
import "../../../adaptive/mainpage/MainPageAdaptive.scss"
import Card from "./card/Card";

export const HeaderClothes = ({ onPlus, currentItems }) => {
    return (

        <div className="container">
            <section className="header__clothes-card">

                {currentItems &&
                    currentItems.map((card) => (
                        <Card onPlus={onPlus} card={card} />
                ))}
            </section>
        </div>
    );
};