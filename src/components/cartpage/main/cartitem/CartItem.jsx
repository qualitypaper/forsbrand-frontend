import React, {useContext, useEffect} from "react";
import {AppContext} from "../../../app/App";
import SomeComponent from "../../../../assets/constant";
import QuantityInput from "../../../mainpage/QuantityInput";
import cross from "../../../../assets/images/cross_mark.svg";
import "./CartItem.scss"

const CartItem = ({
                      images,
                      name,
                      size,
                      availableSizes,
                      quantity,
                      setQuantity,
                      deleteToOrder,
                      product,
                      removeFromOrder,
                  }) => {
    const { cartItems, setCartItemCount, setTotalCost } =
        useContext(AppContext);



    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        setTotalCost(
            cartItems.reduce(
                (total, cartItem) => total + cartItem.originalPrice * cartItem.quantity,
                0
            )
        );
    }, [cartItems]);

    return (
        <div className="cartItems">
            <div className="cartItems-left">
                <div className="cartItems-img">
                    <img src={images[0]} width={100} height={105} alt="" />
                </div>
                <div className="cart__order-full-right-text">
                    <div className="cart__order-full-right-name">
                        <p className="text">{name}</p>
                        <p className="opacity-9">Розмір: {size}</p>
                    </div>
                    <div className="cart__order-full-right-price">
                        <b>Ціна: <SomeComponent currentClothing={product  || {}} /></b>
                        <p>{availableSizes}</p>
                    </div>
                </div>
                <div className="quantity1">
                    <QuantityInput
                        item={product}
                        removeFromCart={removeFromOrder}
                        value={quantity}
                        setQuantity={setQuantity}
                    />
                    <img
                        onClick={deleteToOrder}
                        src={cross}
                        className="m-20 cu-p"
                        alt="ClosedBox"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem