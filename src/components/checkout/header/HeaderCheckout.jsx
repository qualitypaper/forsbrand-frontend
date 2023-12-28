import React from 'react'
import "./HeaderCheckout.scss"
import {Link} from "react-router-dom";

const HeaderCheckout = () => {
    return (
        <div className="checkout_main">
        <header className="header__checkout">
            <div>
                <Link to="/">
                <h1>БЕЗПЕЧНЕ ЗАМОВЛЕННЯ</h1>
                </Link>
                <p>Продовжити перегляд</p>
            </div>
        </header>
        </div>
    )
}

export default HeaderCheckout;