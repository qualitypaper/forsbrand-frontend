import React, {useContext, useState} from 'react'
import CheckoutInput from "./detailsform/CustomerDetailsForm";
import Payment from "./payment/Payment";
import {AppContext} from "../../../app/App";
import "./CheckoutLeft.scss"
import ShippingOptions from "./shippingoptions/ShippingOptions";
import CheckoutInputs from "./checkoutinputs/CheckoutInputs";

const   CheckoutLeft = () => {
    const {
        showPay,
        showPayOpen,
    } = useContext(AppContext);
    return (
        <section className="checkout-left">
            <CheckoutInputs/>
            <ShippingOptions/>
            {showPayOpen &&
                <div className="checkout-left-delivery2">
                    <Payment/>
                </div>
            }
            {showPay &&
                <div className="checkout-left-payment">
                    <p>Оплата</p>
                </div>
            }
            <div className="checkout-left-review">
                <p>Перегляньте та розмістіть замовлення</p>
            </div>
        </section>
    )
}
export default CheckoutLeft
