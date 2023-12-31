import React, {useContext, useEffect, useState} from 'react';
import "./drawer.scss"
import arrow_right from "../../../assets/images/arrow_right.svg"
import logo_img from "../../../assets/images/logo_img.PNG"
import cross from "../../../assets/images/cross_mark.svg";
import {Link} from "react-router-dom";
import QuantityInput from "../QuantityInput";
import {AppContext} from "../../app/App";
import {SIZES} from "../../../assets/constant";

function Drawer({ onClickClosed, deleteToOrder,removeFromCart}) {
    const [hoveredItemId, setHoveredItemId] = useState("");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const {
        cartItems,
        totalCost,
        handleQuantityChange,
    } = useContext(AppContext);

    return (
        <div>
            <div className="overlay">
                <div className="drawer">
                    <div className="header_drawer">
                        <img
                            onClick={onClickClosed}
                            className="remove-btn cu-p"
                            src={arrow_right}
                            width={30}
                            height={30}
                            alt="Remove"
                        />
                        <div className="header_drawer-main">
                            <h2 className="header_text fz-20 text-uppercase">
                                Cart
                            </h2>
                        </div>
                    </div>
                    {cartItems.length > 0 ? (
                        <div className="cartItems-mains">
                        <div className="cartItems-main">
                            {cartItems.map((item) => (
                                <div key={item.id} onMouseEnter={() => setHoveredItemId(item.id)} onMouseLeave={() => setHoveredItemId("")} className="cartItem">
                                    <img src={item.images[0]} width={80} height={80} alt="" />
                                    <div className="cart_item">
                                        <p className="text" >{item.name}</p>
                                        <b>{item.originalPrice} ₴ {item.size}</b>
                                        <QuantityInput
                                            removeFromCart={removeFromCart}
                                            setQuantity={(quantity) => handleQuantityChange(item, quantity)}
                                            item={item}
                                            value={item.quantity}
                                            deleteToOrder={() => deleteToOrder(item.id)}
                                        />
                                    </div>
                                    {hoveredItemId === item.id && (
                                        <img
                                            onClick={() => deleteToOrder(item.id)}
                                            className="cartItems-img"
                                            src={cross}
                                            alt="Remove"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="items">
                                <div className="cartTotalBlock">
                                    <ul>
                                        <li>
                                            <span>Разом:</span>
                                            <b>{totalCost}  ₴</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className="button_order">
                                    <Link to="/cart-page">
                                    <button  className="Btn cu-p">
                                        Продовжити
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="240" height="240" src={logo_img} alt="Empty"/>
                            <h2>Нічого немає</h2>
                            <p className="opacity-6 m-20">Додайте хочаб одну річ</p>
                            <button onClick={onClickClosed} className="Btn">
                                <img className="Arrow2" width={20} height={20} src={arrow_right} alt="Arrow"/>
                               Повернутися назад
                            </button>
                        </div>
                    )}
            </div>
                </div>
        </div>
    );
}

export default Drawer;