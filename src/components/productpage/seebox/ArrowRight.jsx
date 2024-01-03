import React, {useContext} from 'react'
import arrowTopBackground from "../../../assets/images/arrow_top_background.svg";
import {AppContext} from "../../app/App";

export const ArrowRight = ({handleSwipe, totalPages}) => {
    const {
        currentPage,
    } = useContext(AppContext)
    return (
        <>
            {currentPage < totalPages - 1 && (
                <div className="arrow arrow-right" onClick={() => handleSwipe('Right')}>
                    <img src={arrowTopBackground} alt=""/>
                </div>
            )}
        </>
    )
}
