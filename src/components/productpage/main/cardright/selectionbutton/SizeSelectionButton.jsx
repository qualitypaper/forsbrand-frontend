import React, { useState } from 'react';
import arrow_top from "../../../../../assets/images/arrow_top.svg";
import arrow_down from "../../../../../assets/images/arrow_down.svg";

const SizeSelectionButton = ({ textList, setOpen, open }) => {
    const [arrowChange, setArrowChange] = useState(false);

    const ChangeImgButton = () => {
        setArrowChange(!arrowChange);
    };

    return (
        <div onClick={ChangeImgButton}>
            <p className="opacity-8">Sizes</p>
            <button
                className="product__page-size-btn"
                onClick={() => setOpen(!open)}
            >
                <p>{textList}</p>
                <img src={arrowChange ? arrow_top : arrow_down} alt=""/>
            </button>
        </div>
    );
};

export default SizeSelectionButton;