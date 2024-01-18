import React from 'react';
import './error404.scss';
import arrow from '../../assets/images/arrow_right.svg';
import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className="error_404-wrapper">
             <div className="error_404-content">
                 <div className="error_404-title-wrapper">
                     <h1 className="error_404-title">404</h1>
                     <p className="error_404-text">Упс... Сторінку не знайдено, пошукай ще! </p>
                 </div>
                 <div className="error_404-button">
                     <Link to="/">
                     <div className="error_404-button-wrapper">
                         <img src={arrow} alt=""/>
                         <a href="/"> На головну</a>
                     </div>
                     </Link>
                 </div>
             </div>

        </div>
    );
}

export default Error404;