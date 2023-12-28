import React from 'react'
import arrow_right from "../../../assets/images/arrow_left_black.svg";
import arrow_left from "../../../assets/images/arrow_right_black.svg";
import "./Header.scss"
import {Link} from "react-router-dom";

export const Header = ({ text}) => {


    return (
        <header className="header">
            <div className="containerHeader">
                <div className="header__product">
                    <div className="header__product-nav">
                        <nav className="header__product-navigation">
                            <Link to="/">
                                <p className="header__product-navigation-bold">Головна / </p>
                            </Link>
                            <p className="header__product-navigation-opacity">{text}</p>
                        </nav>
                    </div>
                    <div>
                        <nav className="header__product-navigation2">
                            <img width={25} height={25} src={arrow_left} alt="" />
                            <p >Назад |</p>
                            <Link to={`/product-page/`}>
                                <p >Далі</p>
                            </Link>
                            <img width={25} height={25} src={arrow_right} alt="" />
                        </nav>
                    </div>
                    <div className="plant-shopping-right-sorting-popup">
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </header>
    );
};
