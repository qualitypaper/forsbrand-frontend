import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PromocodeOrder from "./promocode/PromocodeOrder";
import OrderTextArea from "./textarea/OrderTextArea";
import { AppContext } from "../../../app/App";
import "./CheckoutRight.scss";
import SomeComponent from "../../../../assets/constant";

const CheckoutRight = ({ handleChange }) => {
  const { cartItems, totalCost, selectedOption, promocode } =
    useContext(AppContext);

  const discountedTotal = promocode.discount
    ? totalCost - (promocode.discount / 100) * totalCost
    : totalCost;

    const handlePromocodeChange = (promocode) => {
        handleChange("promocode", promocode);
    }

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
              <img src={item.images[0]} alt="" />
              <div className="checkout-right__order-card-text">
                <div className="checkout-right__order-card-mainText">
                  <p className="checkout-right__order-card-itemName">
                    {item.name}
                  </p>
                  <p className="checkout-right__order-card-price">
                    <SomeComponent currentClothing={item} />
                  </p>
                </div>
                <p className="checkout-right__order-card-quantity">
                  К-сть: {item.quantity}
                </p>
                <p className="checkout-right__order-card-size">
                  Розмір: {item.size}
                </p>
              </div>
            </div>
          </div>
        ))}
        <PromocodeOrder handlePromocodeChange={handlePromocodeChange}/>
        <OrderTextArea handleChange={handleChange}/>
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
            <div className="cart__order-full-price">
              <p>Промокод</p>
              {promocode.discount ? (
                <p>{promocode.discount}%</p>
              ) : (
                <p>Немає промокоду</p>
              )}
            </div>
            <p></p>
          </ul>
        </div>
        <div className="card__order-full-btn">
          <div className="card__order-full-btn-text">
            <p className="card__order-full-btn-text-main">Загалом</p>
            <p>
              {Number.parseInt(discountedTotal) +
                (selectedOption.price
                  ? Number.parseInt(selectedOption.price)
                  : 0)}
              ₴
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckoutRight;
