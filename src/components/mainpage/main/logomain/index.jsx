import React from 'react'
import logo from "../../../../assets/images/logo_img.PNG"
import "./LogoMain.scss"
import "./../../../adaptive/mainpage/MainPageAdaptive.scss"
import {Link} from "react-router-dom";


export const LogoMain = () => {
    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className="container">
            <Link to="/" onClick={handleClick}>
                <section className="logo_main">
                    <img src={logo} alt="logo" />
                </section>
            </Link>
        </div>
    );
};