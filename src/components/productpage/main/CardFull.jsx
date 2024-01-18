import React, {useContext, useState} from "react";
import "./CardFull.scss";
import {Header} from "../header";
import {AppContext} from "../../app/App";
import CardFullLeft from "./cardleft/CardFullLeft";
import CardFullRight from "./cardright/CardFullRight";
import SeeSizes from "./SeeSizes";
import ClosedBox from "../seebox/closed/ClosedBox";

function CardFull({product, onClickAddToCart}) {
    const {currentClothing, currentImageIndex} = useContext(AppContext);
    const [openSeeSized, setOpenSeeSized] = useState(false);

    const {name} = currentClothing;

    const getSizesImage = () => {
        if (currentClothing.group) {
            if (currentClothing.group.sizesImage) {
                return currentClothing.group.sizesImage;
            }
        }
        return false;
    };

    const OpenSeeSized = ({sizesImage, setOpenSeeSized}) => {

        return (
            <div className="main-see_sizes-images">
                <div className="see_sizes-images">
                    <img src={sizesImage} alt="sizes"/>
                </div>
                <ClosedBox setOpenSeeSized={() => setOpenSeeSized(false)}/>
            </div>
        );
    };


    return (
        <div className="card__full">
            <Header text={name} maintext="Головна /" id={currentImageIndex}/>
            <div className="card__full-all">
                <CardFullLeft onClickAddToCart={onClickAddToCart} product={product}/>
                <CardFullRight/>
            </div>
            <SeeSizes sizesImage={getSizesImage()} setOpenSeeSized={setOpenSeeSized}/>
            {openSeeSized && (<OpenSeeSized sizesImage={getSizesImage()} setOpenSeeSized={setOpenSeeSized}/>)}
        </div>
    )
        ;
}

export default CardFull;
