import React, { useContext, useEffect } from 'react'
import HeaderCheckout from "../components/checkout/header/HeaderCheckout";
import "./CheckoutPage.scss"
import MainCheckout from "../components/checkout/main/MainCheckout";
import { AppContext } from "../components/app/App";
import SuccessfulOrder from "../components/checkout/successfulorder/SuccessfulOrder";
import UnsuccessfulOrder from "../components/checkout/unsuccessfulorder/UnsuccessfulOrder";

export const CheckoutPage = () => {
    const {
        cardData,
        setShowData,
        setInputData,
        setDeliveryMethod,
        setDeliveryOpenMethod, 
        setOrderData,
        setSelectedOption,
        setShowPayOpen,
        setShowPay,
    } = useContext(AppContext);
    console.log("AppContext cardData:", cardData);
    // const addToOrder = (item) => {
    //     const temp = cartItems.find((e) => e.id === item.id);

    //     if (temp) {
    //         temp.quantity += 1;
    //         setCartItems([...cartItems]);
    //     } else {
    //         // If the item doesn't exist, add it to the array with a quantity of 1
    //         setCartItems([...cartItems, { ...item, quantity: 1 }]);
    //     }
    // };

    // const deleteToOrder = (id) => {
    //     setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    // };
    const clearState = () => {
        setShowData(false);
        setInputData(true);
        setDeliveryMethod(true);
        setDeliveryOpenMethod(false);
        setOrderData(false);
        setShowPayOpen(false);
        setShowPay(true);
        setSelectedOption({})
    }

    return (
        <>
            <div className="mid1">
                <HeaderCheckout clearState={clearState} />
                <MainCheckout />
            </div>
        </>
    )
}
