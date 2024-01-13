import { useState, useEffect } from "react";
import "./HeaderClothes.scss";
import "../../../adaptive/mainpage/MainPageAdaptive.scss"
import Card from "./card/Card";
import Skeleton from '@mui/material/Skeleton';

export const HeaderClothes = ({ onPlus, currentItems }) => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <section className="header__clothes-card">
                {currentItems ? (
                    showImage ? (
                        currentItems.map((card) => (
                            <Card
                                key={card.id}
                                onPlus={onPlus}
                                card={card}
                            />
                        ))
                    ) : (
                        <Skeleton animation="wave" width={310} height={310} />
                    )
                ) : null}
            </section>
        </div>
    );
};