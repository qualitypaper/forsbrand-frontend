import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import PromocodeOrder from "./promocode/PromocodeOrder";
import OrderTextArea from "./textarea/OrderTextArea";
import {AppContext} from "../../../app/App";
import "./CheckoutRight.scss"
import {currencyValue} from "../../../../assets/constant";

const CheckoutRight = () => {
    const {
        cartItems,
        totalCost,
        selectedOption
    } = useContext(AppContext)
    const constructPrice = () => {
        const { currentPrice, originalPrice } = cartItems;
        if (currentPrice !== originalPrice) {
            return (
                <>
          <span className="original_price">
            {originalPrice + currencyValue}
          </span>
                    <span>{currentPrice + currencyValue}</span>
                </>
            );
        } else {
            return <span>{originalPrice + currencyValue}</span>;
        }
    };
    return (
        <section className="checkout-right">
            <div className="checkout-right__order">
                <div className="checkout-right__order-header">
                    <p className="checkout-right__order-header-data">Дані замовлення</p>
                    <Link to="/cart-page">
                        <p>Змінити кошик</p>
                    </Link>
                </div>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <div className="checkout-right__order-card">
                            <img width={70} height={70} src={item.images[0]} alt="" />
                            <div className="checkout-right__order-card-text">
                                <div className="checkout-right__order-card-mainText">
                                    <p className="checkout-right__order-card-itemName">{item.name}</p>
                                    {/* TODO: use method construct price */} <p>{constructPrice}</p>
                                    <p className="checkout-right__order-card-price">{item.currentPrice}₴</p>
                                </div>
                                <p>К-сть: {item.quantity}</p>
                                <p>Розмір: {item.size}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <PromocodeOrder />
                <OrderTextArea />
                <div>
                    <ul className="cart__order-full-delivery">
                        <li className="cart__order-full-price">
                            <p>Сумма</p>
                            <p>{totalCost}₴</p>
                        </li>
                        <li className="cart__order-full-price">
                            <p>Доставка</p>
                            <li className="cart__order-full-price">
                                <p>
                                    {selectedOption && selectedOption.price !== undefined
                                        ? `${selectedOption.price}₴`
                                        : "Выберите доставку"}
                                </p>
                            </li>
                        </li>
                        <p></p>
                    </ul>
                </div>
                <div className="card__order-full-btn">
                    <div className="card__order-full-btn-text">
                        <p className="card__order-full-btn-text-main">Загалом</p>
                        <p>{Number.parseInt(totalCost) + (selectedOption.price ? Number.parseInt(selectedOption.price) : 0)}₴</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CheckoutRight
