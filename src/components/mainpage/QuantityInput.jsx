import React, {useContext} from "react";
import arrow_top_background from "../../assets/images/arrow_top_background.svg";
import arrow_down_background from "../../assets/images/arrow_down_background.svg";
import "./QuantityInput.scss"
import {AppContext} from "../app/App";
import {useNavigate} from "react-router-dom";

function QuantityInput({ value, setQuantity, item, removeFromCart }) {
    const {
        cartItems,
        windowItems: windowItem,
        setCartItems,
        addToOrder,
        removeFromOrder,
    } = useContext(AppContext);

    // const handleIncrease = (item) => {
    //     const temp = cartItems.find((e) => e.id === item.id && e.size === item.size);
    //     if (temp) {
    //         temp.quantity += 1;
    //         setCartItems([...cartItems]);
    //     } else {
    //         setCartItems([...cartItems, { ...item, quantity: 1 }]);
    //     }
    // };
    // const removeFromOrder = (item) => {
    //     setCartItems((prevItems) => {
    //         const updatedItems = prevItems.map(product => {
    //             if (product.id === item.id) {
    //                 if (product.quantity > 1) {
    //                     product.quantity -= 1;
    //                 } else return null;
    //             }
    //             return product;
    //         }).filter(Boolean);
    //
    //         if (updatedItems.length === 0) {
    //             navigate('/');
    //         }
    //
    //         return updatedItems;
    //     });
    // };
    const handleDecrease = () => {
        const newQuantity = Math.max(value - 1, 1);
        setQuantity(newQuantity);

        if (newQuantity === 1) {
            // If the quantity becomes 1, you might want to remove the item from the cart
            if (item) {
                removeFromOrder(item);
            } else {
                removeFromOrder(windowItem);
            }
        }
    };

    const handleIncrease = () => {
        if(item) {
            addToOrder(item)
        } else {
            addToOrder(windowItem);
        }

        setQuantity(value + 1);
    };

    return (
        <div className="quantity-input">
            <div className="custom-input-container">
                <div className="d-flex align-center pt-5">
                    <img
                        onClick={handleDecrease}
                        className="img_quantity cu-p"
                        width={10}
                        height={10}
                        src={arrow_down_background}
                        alt=""
                    />
                    <p className="pr-10 pl-10">{value}</p>
                    <img
                        onClick={handleIncrease}
                        className="img_quantity1 cu-p"
                        width={10}
                        height={10}
                        src={arrow_top_background}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default QuantityInput;