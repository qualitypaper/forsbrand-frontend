import React from 'react'
import "./Footer.scss"
import facebook from "../../../assets/images/facebook.webp"
import instagram from "../../../assets/images/instagram.webp"
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-all">

                <div className="footer-top">
                    <div className="footer__img">
                        <img src={facebook} alt=""/>
                        <img src={instagram} alt=""/>
                    </div>
                    <div className="footer__img-text">
                        <p>Copyright © 2023, Кирилл Буданов представляет</p>
                    </div>
                </div>
                <div className="footer-top">
                    <ul>
                        <Link to="/delivery">
                            <li>Delivery</li>
                        </Link>
                        <Link to="/privacy-policy">
                        <li>Privacy Policy</li>
                        </Link>
                        <Link to="/contacts">
                            <li>Contacts</li>
                        </Link>
                    </ul>
             </div>
            </div>
        </footer>
    )
}
