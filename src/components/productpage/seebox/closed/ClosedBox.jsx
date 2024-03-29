import React, {useContext} from 'react';
import cross from "../../../../assets/images/crossBox.svg";
import {AppContext} from "../../../app/App";
import "./ClosedBox.scss"

const ClosedBox = ({setOpenSeeSized}) => {
    const {
        setImagesBoxOpened,
    } = useContext(AppContext);
    const closedBox = () => {
        setImagesBoxOpened(false)
        setOpenSeeSized(false)
    }

    return (
        <div onClick={closedBox} className="cross">
            <img src={cross} alt=""/>
        </div>
    );
};

export default ClosedBox;