import React, { useContext, useState } from 'react';
import { AppContext } from "../../../app/App";
import "./CardFullLeft.scss";
import fullscreen from "../../../../assets/images/fullscreen.svg";
import { SwitchCardFull } from "./switch/SwitchCardFull";


const CardFullLeft = () => {
    const { currentClothing, currentImageIndex, setImagesBoxOpened, imagesBoxOpened } = useContext(AppContext);

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
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className={`productPage__left-page-img-container ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="images_zoom">
                    {isHovered && (
                        <div className="images_zoom_background">

                            <img onClick={() => setImagesBoxOpened(!imagesBoxOpened)} src={fullscreen} alt="" />
                        </div>
                    )}
                </div>
                <img
                    className="productPage__left-page-img"
                    src={images[currentImageIndex]}
                    alt=""
                />
                {/* <Image.PreviewGroup*/}
                {/*    items={images}*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        width={500}*/}
                {/*        src={images[currentImageIndex]}*/}
                {/*    />*/}
                {/*</Image.PreviewGroup> */}
            </div>
        );
    };

    return (
        <div className="productPage__left-page">
            <CardFullLeftImg />
            <SwitchCardFull />
            <CardFullLeftText />
        </div>
    );
};

export default CardFullLeft;