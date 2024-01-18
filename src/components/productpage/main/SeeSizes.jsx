import React from 'react'
import "./SeeSizes.scss"

const SeeSizes = ({ sizesImage, setOpenSeeSized }) => {

    const clickOpenSeeSized = () => {
        setOpenSeeSized(true);
    };

    const shouldShow = () => {
        return !(sizesImage instanceof Boolean);
    }

    return shouldShow() && (
        <div onClick={clickOpenSeeSized} className="see_sizes">
            <button className="see_sizes-btn">
                <p className="see_sizes-text">Подивитися розміри</p>
            </button>
        </div>
    );
};

export default SeeSizes;