import React from 'react'
import "./HeaderCheckout.scss"
import { Link } from "react-router-dom";

const HeaderCheckout = ({ clearState }) => {
    return (
        <div className="checkout_main">
            <header className="header__checkout">
                <div>
                    <Link to="/">
                        <h1>БЕЗПЕЧНЕ ЗАМОВЛЕННЯ</h1>
                    </Link>
                    <Link to="/" onClick={() => clearState()}>
                        <p>Продовжити перегляд</p>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HeaderCheckout;