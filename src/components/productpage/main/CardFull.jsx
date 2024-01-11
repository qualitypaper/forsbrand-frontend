import React, { useContext, useState } from "react";
import "./CardFull.scss";
import { Header } from "../header";
import { AppContext } from "../../app/App";
import CardFullLeft from "./cardleft/CardFullLeft";
import CardFullRight from "./cardright/CardFullRight";
import SeeSizes from "./SeeSizes";
import ClosedBox from "../seebox/closed/ClosedBox";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import FullScreenComponent from "../seebox/fullscreen/FullScreenComponent";

function CardFull({product, onClickAddToCart}) {
    const { currentClothing, currentImageIndex, openSeeSized, setOpenSeeSized } = useContext(AppContext);
    const {name} =
        currentClothing;
        const getSizesImage = () => {
            if (currentClothing.group && currentClothing.group.sizesImage) {
                return currentClothing.group.sizesImage;
            } else if (currentClothing.group && currentClothing.group.oneSize) {
                return ["One Size"];
            } else {
                return ["Немає розмірів"];
            }
        };
        
        const OpenSeeSized = () => {
            const sizesImage = getSizesImage();
        
    
            if (sizesImage) {
                return (
                    <div className="main-see_sizes-images">
                        <div className="see_sizes-images">
                            <img src={sizesImage} alt="sizes"/>
                        </div>
                        <ClosedBox />
                    </div>
                );
            }
        };


    return (
        <div className="card__full">
            <Header text={name} maintext="Головна /" id={currentImageIndex} />
            <div className="card__full-all">
                <CardFullLeft onClickAddToCart={onClickAddToCart} product={product} />
                <CardFullRight />
            </div>
            <SeeSizes setOpenSeeSized={setOpenSeeSized} />
            {openSeeSized && ( <OpenSeeSized />)}
        </div>
    );
}

export default CardFull;
