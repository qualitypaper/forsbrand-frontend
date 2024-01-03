import React, {useContext} from 'react'
import {AppContext} from "../../app/App";

const ImagesBox = () => {
    const {
        currentPage, currentClothing
    } = useContext(AppContext)
    const imagesPerPage = 1;
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const {images} = currentClothing;
    return (
        <div className="imagesBoxOpenedBackground">
            {images.slice(startIndex, endIndex).map((image, index) => (
                <img key={index} src={image} alt=""/>
            ))}
        </div>
    )
}
export default ImagesBox
