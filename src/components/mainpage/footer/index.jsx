import React from 'react'
import "./Footer.scss"
// import facebook from "../../../assets/images/facebook.webp"
// import instagram from "../../../assets/images/instagram.webp"
import {Link} from "react-router-dom";
// import telegram from "../../../assets/images/telegram.webp"
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import PolicyTwoToneIcon from '@mui/icons-material/PolicyTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
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
                <div className="footer-top">
                    <ul>
                        <Link to="/delivery">
                            <li className="d-flex align-center icons">   <LocalShippingTwoToneIcon fontSize="medium" />  Delivery</li>
                        </Link>
                        <Link to="/privacy-policy">
                            <li className="d-flex align-center  icons"> <PolicyTwoToneIcon fontSize="medium" />Privacy Policy</li>
                        </Link>
                        <Link to="/contacts">
                            <li className="d-flex align-center icons"> <CallTwoToneIcon fontSize="medium" />Contacts</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
