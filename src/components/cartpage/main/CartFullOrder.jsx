import React, {useContext, useEffect} from 'react';
import sale from "../../../assets/images/sale.svg";
import cross from "../../../assets/images/cross_mark.svg";
import lock from "../../../assets/images/lock.svg";
import "./CartFullOrder.scss"
import {Link} from "react-router-dom";
import {AppContext} from "../../app/App";
import QuantityInput from "../../mainpage/QuantityInput";

const CartItem = ({ images, originalPrice, name,  availableSizes, quantity, setQuantity, deleteToOrder,  product }) => {
    const {
        cartItems,
        setCartItemCount,
        setTotalCost,
        removeFromOrder
    } = useContext(AppContext)


    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        );
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        setTotalCost(cartItems.reduce((total, cartItem) => total + cartItem.originalPrice * cartItem.quantity, 0))
    }, [cartItems])

    return (
        <div className="cartItems">
        <div className="cartItems-left">
            <div className="cartItems-img">
                <img src={images} width={100} height={105}  alt=""/>
            </div>
            <div className="cart__order-full-right-text">
                <div className="cart__order-full-right-name">
                    <p className="text">{name}</p>
                    <p></p>
                </div>
                <div className="cart__order-full-right-price">
                    <b>{originalPrice}₴</b>
                    <p>{availableSizes}</p>
                </div>
            </div>
            <div className="d-flex quantity">
                <QuantityInput item={product} removeFromCart={removeFromOrder} value={quantity} setQuantity={setQuantity} />
                <img onClick={deleteToOrder} src={cross} className="m-20 cu-p" alt="Cross" />
            </div>
        </div>
        </div>
    );
};



const CartFullOrder = ({deleteToOrder,  removeFromCart}) => {
    const {
        openPromotionalCode,
        setOpenPromotionalCode,
        totalCost,
        cartItems,
        setQuantity,
    } = useContext(AppContext);

    return (
        <div className="cart__order-full">
            <div className="cart__order-full-right">
                <nav className="cart__order-full-nav">
                    <p className="cart__order-full-nav-text">Кошик</p>
                </nav>
                {cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        images={item.images}
                        name={item.name}
                        id={item.id}
                        originalPrice={item.originalPrice}
                        availableSizes={item.availableSizes}
                        quantity={item.quantity}
                        setQuantity={setQuantity}
                        product={item}
                        deleteToOrder={() => deleteToOrder(item.id)}
                        removeFromCart={removeFromCart}
                    />
                ))}
                <div className="cart__order-full-list">
                    <div className="cart__order-full-list1">
                        <img width={20} height={20} src={sale} alt="Sale"/>
                        <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
                    </div>
                        {openPromotionalCode && (
                        <div className="cart__order-full-list1-open">
                            <input
                                className="inp2"
                                type="text"
                                placeholder="Веддіть промокод"
                            />
                            <button>Застосувати</button>
                        </div>
                        )}
                </div>
            </div>
            <div className="cart__order-full-left">
                <nav className="cart__order-full-nav">
                    <p className="cart__order-full-nav-text">Дані замовлення</p>
                </nav>
                {/*<ul className="cart__order-full-delivery">*/}
                {/*    /!*<li className="cart__order-full-price">*!/*/}
                {/*    /!*    <p>Сумма</p>*!/*/}
                {/*    /!*    <p>{totalCost}₴</p>*!/*/}
                {/*    /!*</li>*!/*/}
                {/*    /!*<li className="cart__order-full-price">*!/*/}
                {/*    /!*    <p>Доставка</p>*!/*/}
                {/*    /!*    <p>{originalPrice}₴</p>*!/*/}
                {/*    /!*</li>*!/*/}
                {/*    <p></p>*/}
                {/*</ul>*/}
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
                        <img width={15} height={15} src={lock} alt=""/>
                        <p>Безпечна оплата</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartFullOrder;