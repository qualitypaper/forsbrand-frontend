import React, {useContext, useState} from 'react'
import {AppContext} from "../../../../app/App";
import "./SwitchCardFull.scss"

export const SwitchCardFull = () => {
    const {
        currentClothing,
        setCurrentImageIndex,
    } = useContext(AppContext)
    const { images } =
        currentClothing;
    const [selectedButton, setSelectedButton] = useState(0);
    const isButtonSelected = (index) => {
        return selectedButton === index;
    };
    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
        setSelectedButton(index);
    };
    return (
        <div className="switch_cardfull">
            {images &&
                images.map((image, index) => (
                    <button
                        key={index}
                        className={
                            isButtonSelected(index)
                                ? "input_circle selected"
                                : "input_circle"
                        }
                        onClick={() => handleImageChange(index)}
                    >
                        <img width={40} height={40} src={image} alt="" />
                    </button>
                ))}
        </div>
    )
}
