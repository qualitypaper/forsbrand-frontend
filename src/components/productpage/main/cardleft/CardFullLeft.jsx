import React, {useContext} from 'react';
import {AppContext} from "../../../app/App";
import "./CardFullLeft.scss";
import {SwitchCardFull} from "./switch/SwitchCardFull";


const CardFullLeft = () => {
    const { currentClothing, currentImageIndex } = useContext(AppContext);

    if (!currentClothing || !currentClothing.images || currentImageIndex === undefined) {
        return "";
    }

    const { images, description } = currentClothing;

    const processDescription = () => {
        if (description) {
            return String(description).replaceAll("\n", "</br>");
        } else {
            return "";
        }
    };

    const CardFullLeftText = () => {
        return (
            <div className="window__left-text">
                <div dangerouslySetInnerHTML={{ __html: processDescription() }} />
            </div>
        );
    };

    const CardFullLeftImg = () => {
        return (
            <img
                className="productPage__left-page-img"
                src={images[currentImageIndex]}
                alt=""
            />
        );
    };

    return (
        <div className="productPage__left-page ">
            <CardFullLeftImg />
            <SwitchCardFull />
            <CardFullLeftText />
        </div>
    );
};

export default CardFullLeft;