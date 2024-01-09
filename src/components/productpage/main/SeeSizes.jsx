import React, {useState} from 'react'
import arrow_top from "../../../assets/images/arrow_top.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import "./SeeSizes.scss"

const SeeSizes = ({ setOpenSeeSized }) => {

    const clickOpenSeeSized = () => {
        setOpenSeeSized(true);
    };

    return (
        <div onClick={clickOpenSeeSized} className="see_sizes">
            <button className="see_sizes-btn">
                <p className="see_sizes-text">Подивитися розміри</p>
            </button>
        </div>
    );
};

export default SeeSizes;