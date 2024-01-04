import React, {useContext, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './CardFullSeeBox.scss';
import { AppContext } from '../../app/App';

import {ArrowLeft} from "./arrow/ArrowLeft";
import ImagesBox from "./boximages/ImagesBox";
import {ArrowRight} from "./arrow/ArrowRight";
import ZoomLoup from "./zoom/ZoomLoup";
import FullScreenComponent from "./fullscreen/FullScreenComponent";
import ClosedBox from "./closed/ClosedBox";

const CardFullSeeBox = () => {
    const { currentClothing, setCurrentPage } = useContext(AppContext);
    const { images } = currentClothing;

    const imagesPerPage = 1;

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

    useEffect(() => {
        setCurrentPage(0); // Set the initial page to 0 (first image)
    }, []); // Run this effect only once, on component mount



    return (
        <FullScreen handle={handle}>
            <div className={`imagesBoxOpened }`} {...handlers} >
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