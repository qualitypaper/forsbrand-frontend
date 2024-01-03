import React, { useContext, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './CardFullSeeBox.scss';
import { AppContext } from '../../app/App';

import {ArrowLeft} from "./ArrowLeft";
import ImagesBox from "./ImagesBox";
import {ArrowRight} from "./ArrowRight";
import ZoomLoup from "./ZoomLoup";
import FullScreenComponent from "./FullScreenComponent";
import ClosedBox from "./ClosedBox";

const CardFullSeeBox = () => {
    const { currentClothing, setCurrentPage } = useContext(AppContext);
    const { images } = currentClothing;

    const imagesPerPage = 1; // Adjust this value based on your design

    const totalPages = Math.max(1, Math.ceil(images.length / imagesPerPage));

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('Left'),
        onSwipedRight: () => handleSwipe('Right'),
    });

    const handleSwipe = (direction) => {
        if (direction === 'Left') {
            setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
        } else if (direction === 'Right') {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }
    };
    const handle = useFullScreenHandle();

    return (
        <FullScreen handle={handle}>
            <div className={`imagesBoxOpened }`} {...handlers}>
                <ArrowLeft handleSwipe={() => handleSwipe('Left')} />
                <ImagesBox />
                <ArrowRight handleSwipe={() => handleSwipe("Right")} totalPages={totalPages}/>
                <ZoomLoup />
                <FullScreenComponent handle={handle}/>
                <ClosedBox />
            </div>
        </FullScreen>
    );
};

export default CardFullSeeBox;