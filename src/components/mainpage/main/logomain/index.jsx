import React from 'react'
import logo from "../../../../assets/images/logo_img.PNG"
import "./LogoMain.scss"
import "./../../../adaptive/mainpage/MainPageAdaptive.scss"
import {Link} from "react-router-dom";


export const LogoMain = () => {
    return (
        <div className="container">
            <Link to="/">
        <section className="logo_main">
                <img src={logo}  alt="logo"/>
        </section>
            </Link>
        </div>
    )
}
