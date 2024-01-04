import React, {useContext, useEffect} from 'react'
import {Link} from "react-router-dom";
import lock from "../../../../assets/images/lock.svg";
import {AppContext} from "../../../app/App";
import "./CartFullOrderLeft.scss"

const CartFullOrderRight = () => {
    const {
        totalCost, cartItems,
    } = useContext(AppContext);

    useEffect(() => {
        if(cartItems.length === 0) window.location.href = "/"
    }, [cartItems])
    return (
        <div className="cart__order-full-left">
            <nav className="cart__order-full-nav">
                <p className="cart__order-full-nav-text">Дані замовлення</p>
            </nav>
            <div className="card__order-full-btn">
                <div className="card__order-full-btn-text">
                    <p className="card__order-full-btn-text-main">Загалом</p>
                    <p>{totalCost}₴</p>
                </div>
                <div className="card__order-security">
                    <Link to="/checkout">
                        <button>
                            <p>Оформити</p>
                        </button>
                    </Link>
                    <div className="card__order-full-btn-security">
                        <img width={15} height={15} src={lock} alt="" />
                        <p>Безпечна оплата</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartFullOrderRight
