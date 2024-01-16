import React from 'react'
import "./Footer.scss"
// import facebook from "../../../assets/images/facebook.webp"
// import instagram from "../../../assets/images/instagram.webp"
import {Link} from "react-router-dom";
// import telegram from "../../../assets/images/telegram.webp"
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import PolicyTwoToneIcon from '@mui/icons-material/PolicyTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import instagram from "../../../assets/images/instagram.png";
import telegram from "../../../assets/images/telegram.PNG";
import tiktok from "../../../assets/images/tiktok.PNG";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-all">

                <div className="footer-top">
                    <div className="footer__img">
                        {/*<img width={35} height={35} src={tiktok} alt=""/>*/}
                        {/*<img width={35} height={35} src={instagram} alt=""/>*/}
                        {/*<img width={35}  height={35} src={telegram} alt=""/>*/}
                        <a className="footer__img-link" href="https://www.instagram.com/fors.brand?igsh=MXQ1ZHJwdmtmeDYyYw==">
                            <img width={35} height={35} src={instagram} alt=""/>
                        </a>
                        <a className="footer__img-link" href="https://t.me/forsbrand">
                            <img width={35} height={35} src={telegram} alt=""/>
                        </a>
                        <a className="footer__img-link" href="https://www.tiktok.com/@fors.brand?_t=8iuxjoLny3J&_r=1">
                            <img width={35} height={35} src={tiktok} alt=""/>
                        </a>
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
