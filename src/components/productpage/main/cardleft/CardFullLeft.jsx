import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../app/App";
import "./CardFullLeft.scss";
import {SwitchCardFull} from "./switch/SwitchCardFull";
import {Image} from 'antd';


const CardFullLeft = () => {
    const { currentClothing, currentImageIndex} = useContext(AppContext);

    if (!currentClothing || !currentClothing.images || currentImageIndex === undefined) {
        return "";
    }

    const { images, description } = currentClothing;
    
    const CardFullLeftText = () => {
        const processDescription = () => {
            if (description) {
                return String(description).replaceAll("\n", "</br>");
            } else {
                return "";
            }
        };

        return (
            <div className="window__left-text mt-10 mb-10">
                <div dangerouslySetInnerHTML={{ __html: processDescription() }} />
            </div>
        );
    };

    const CardFullLeftImg = () => {
        const [isHovered, setIsHovered] = useState(false);
        const [width, setWidth] = useState(window.innerWidth);

        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

        const isMobile = width <= 768;
        return (
            <div
                className={`productPage__left-page-img-container ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image.PreviewGroup
                    items={images}
                >
                    <Image
                        className='product_image'
                        width={isMobile ? 250 : 500}
                        height={isMobile ? 275 : 520}
                        src={images[currentImageIndex]}
                    />
                </Image.PreviewGroup>
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