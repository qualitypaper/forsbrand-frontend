import React from 'react'
import "./Footer.scss"
// import facebook from "../../../assets/images/facebook.webp"
// import instagram from "../../../assets/images/instagram.webp"
import {Link} from "react-router-dom";
// import telegram from "../../../assets/images/telegram.webp"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-all">

                <div className="footer-top">
                    <div className="footer__img">
                        {/*<img src={facebook} alt=""/>*/}
                        {/*<img src={instagram} alt=""/>*/}
                        {/*<img width={35}  height={40} src={telegram} alt=""/>*/}
                        <a className="footer__img-link"
                           href="https://www.instagram.com/fors.brand?igsh=MXQ1ZHJwdmtmeDYyYw==">Instagram,</a>
                        <a className="footer__img-link" href="https://t.me/forsbrand">Telegram,</a>
                        <a className="footer__img-link" href="https://www.tiktok.com/@fors.brand?_t=8iuxjoLny3J&_r=1">Tik
                            Tok</a>
                    </div>
                    <div className="footer__img-text">
                        <p>Copyright © 2024, Forsbrand all rights reserved.</p>
                    </div>
                </div>
                <div>
                    <a className="footer__img-link" href="mailto:forsbrandua@gmail.com">forsbrandua@gmail.com</a>
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
