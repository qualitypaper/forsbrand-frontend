import React from 'react'
import "./Footer.scss"
import facebook from "../../../assets/images/facebook.webp"
import instagram from "../../../assets/images/instagram.webp"

export const Footer = () => {
    const footerList = ["Delivery", "Privacy Policy", "Contacts"]
    const [activeListFooter, setActiveListFooter] = React.useState()
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
                        {footerList.map((list, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveListFooter(index)}
                                className={activeListFooter === index ? "activeFooter" : ""}
                            >
                                {list}
                            </li>
                        ))}
                    </ul>
             </div>
            </div>
        </footer>
    )
}
