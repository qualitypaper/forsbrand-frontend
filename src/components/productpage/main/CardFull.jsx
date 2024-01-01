import React, { useContext, useState } from "react";
import "./CardFull.scss";
import { Header } from "../header";
import { AppContext } from "../../app/App";
import CardFullLeft from "./cardleft/CardFullLeft";
import CardFullRight from "./cardright/CardFullRight";
import SeeSizes from "./SeeSizes";

function CardFull({product, onClickAddToCart}) {
    const {currentClothing, currentImageIndex} = useContext(AppContext);
    const [openSeeSized] = useState(false);


    const {name} =
        currentClothing;



    const getSizesImage = () => {
        if (currentClothing.group) {
            return currentClothing.group.sizesImage;
        }
    };
    const OpenSeeSized = () => {
        return(
            <>
            {openSeeSized && (
                <div className="see_sizes-images">
                    <img src={getSizesImage()} alt={}/>
                </div>
            )}
            </>
        )
    }


    return (
        <div className="card__full">
            <Header text={name} id={currentImageIndex}/>
            <div className="card__full-all">
                <CardFullLeft onClickAddToCart={onClickAddToCart} product={product}/>
                <CardFullRight/>
            </div>
            <SeeSizes />
            <OpenSeeSized />
        </div>
    );
}

export default CardFull;
