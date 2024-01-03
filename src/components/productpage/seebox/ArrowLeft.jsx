import React, {useContext} from 'react'
import arrowDownBackground from "../../../assets/images/arrow_down_background.svg";
import {AppContext} from "../../app/App";

export const ArrowLeft = ({handleSwipe}) => {
    const {
        currentPage,
    } = useContext(AppContext)
    return (
        <>
        {currentPage > 0 && (
            <div className="arrow arrow-left" onClick={handleSwipe}>
                <img src={arrowDownBackground} alt="" />
            </div>
        )}
        </>
    )
}
