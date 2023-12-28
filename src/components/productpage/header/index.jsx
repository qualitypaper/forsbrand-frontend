import React from 'react'
import "./Header.scss"
import {Link} from "react-router-dom";

export const Header = ({ text }) => {
    // const [currentId, setCurrentId] = useState(0);

    // const handleNextClick = () => {
    //     const nextId = currentId + 1;
    //     setCurrentId(nextId);
    // };


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
                    <div className="plant-shopping-right-sorting-popup">
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </header>
    );
};
