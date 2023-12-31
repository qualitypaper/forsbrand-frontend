import React, {useContext} from 'react'
import HeaderCheckout from "../components/checkout/header/HeaderCheckout";
import "./CheckoutPage.scss"
import MainCheckout from "../components/checkout/main/MainCheckout";
import {AppContext} from "../components/app/App";
import SuccessfulOrder from "../components/checkout/successfulorder/SuccessfulOrder";
import UnsuccessfulOrder from "../components/checkout/unsuccessfulorder/UnsuccessfulOrder";

export const CheckoutPage = () => {
    const {
      cardData, cartItems, setCartItems, windowItems
    } = useContext(AppContext);
    console.log("AppContext cardData:", cardData);
    const addToOrder = (item) => {
        const temp = cartItems.find((e) => e.id === item.id);

        if (temp) {
            temp.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            // If the item doesn't exist, add it to the array with a quantity of 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // const deleteToOrder = (id) => {
    //     setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    // };

    return (
        <>
            <div className="mid1">
                     <HeaderCheckout />
                     <MainCheckout    onAdd={addToOrder}
                                      product={windowItems}/>
            </div>
        </>
    )
}
