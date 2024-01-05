import React, {useContext} from "react";
import arrow_top_background from "../../assets/images/plus.svg";
import arrow_down_background from "../../assets/images/minus.svg";
import "./QuantityInput.scss"
import {AppContext} from "../app/App";

function QuantityInput({ value, setQuantity, item }) {
    const {
        windowItems: windowItem,
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
                <div className="custom-input-container-main">
                    <img
                        onClick={handleDecrease}
                        className="img_quantity cu-p"
                        src={arrow_down_background}
                        alt=""
                    />
                    <p className="text_quantity">{value}</p>
                    <img
                        onClick={handleIncrease}
                        className="img_quantity1 cu-p"
                        src={arrow_top_background}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default QuantityInput;