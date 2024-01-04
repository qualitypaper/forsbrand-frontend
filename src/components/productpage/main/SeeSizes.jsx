import React, {useState} from 'react'
import arrow_top from "../../../assets/images/arrow_top.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import "./SeeSizes.scss"

const SeeSizes = ({ setOpenSeeSized }) => {
    const [arrowChangeSeeSizes, setArrowChangeSeeSizes] = useState(false);

    const clickOpenSeeSized = () => {
        setOpenSeeSized((prevOpenSeeSized) => !prevOpenSeeSized);
        setArrowChangeSeeSizes((prevArrowState) => !prevArrowState);
    };

    return (
        <div onClick={clickOpenSeeSized} className="see_sizes">
            <button className="see_sizes-btn">
                <p className="see_sizes-text">Посмотреть размеры</p>
                <img
                    className="see_sizes-img"
                    src={arrowChangeSeeSizes ? arrow_top : arrow_down}
                    alt=""
                />
            </button>
        </div>
    );
};

export default SeeSizes;