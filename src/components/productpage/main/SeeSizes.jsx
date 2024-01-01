import React, {useState} from 'react'
import arrow_top from "../../../assets/images/arrow_top.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";

const SeeSizes = () => {
    const [arrowChangeSeeSizes, setArrowChangeSeeSizes] = useState(false)
    const [openSeeSized, setOpenSeeSizes] = useState(false);

    const clickOpenSeeSized = () => {
        setOpenSeeSizes(!openSeeSized);
        setArrowChangeSeeSizes(!arrowChangeSeeSizes)
    };
    return (
        <div onClick={clickOpenSeeSized} className="see_sizes">
            <button
                className="see_sizes-btn"
                onClick={() => setOpenSeeSizes(!openSeeSized)}
            >
                <p className="see_sizes-text"> Посмотреть размеры </p>
                <img className="see_sizes-img" width={30} height={30}
                     src={arrowChangeSeeSizes ? arrow_top : arrow_down} alt=""/>
            </button>
        </div>
    )
}
export default SeeSizes
