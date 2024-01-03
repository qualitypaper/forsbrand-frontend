import React, { useContext } from 'react';
import cross from "../../../assets/images/crossBox.svg";
import { AppContext } from "../../app/App";

const ClosedBox = () => {
    const {
        setImagesBoxOpened,
    } = useContext(AppContext);

    return (
        <div onClick={() => setImagesBoxOpened(false)} className="cross">
            <img src={cross} alt="" />
        </div>
    );
};

export default ClosedBox;