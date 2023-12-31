import React, {useContext, useEffect} from "react";
import {AppContext} from "../../../app/App";
import {currencyValue} from "../../../../assets/constant";
import QuantityInput from "../../../mainpage/QuantityInput";
import cross from "../../../../assets/images/cross_mark.svg";
import "./CartItem.scss"

const CartItem = ({
                      images,
                      originalPrice,
                      name,
                      size,
                      availableSizes,
                      quantity,
                      setQuantity,
                      deleteToOrder,
                      currentPrice,
                      product,
                      removeFromOrder,
                  }) => {
    const { cartItems, setCartItemCount, setTotalCost } =
        useContext(AppContext);


    const constructPrice = () => {
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
                        <b>Ціна: {constructPrice()}</b>
                        <p>{availableSizes}</p>
                    </div>
                </div>
                <div className="d-flex quantity">
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
                        alt="Cross"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem