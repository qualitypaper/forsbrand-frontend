import React, {useContext} from 'react'
import Payment from "./payment/Payment";
import {AppContext} from "../../../app/App";
import "./CheckoutLeft.scss"
import ShippingOptions from "./shippingoptions/ShippingOptions";
import CheckoutInputs from "./checkoutinputs/CheckoutInputs";

const CheckoutLeft = ({ handleChange, submitOrder }) => {
    const {
        showPay,
        showPayOpen,
    } = useContext(AppContext);
    
    return (
        <section className="checkout-left">
            <CheckoutInputs handleChange={handleChange}/>
            <ShippingOptions handleChange={handleChange}/>
            {showPayOpen &&
                <div className="checkout-left-delivery2">
                    <Payment submitOrder={submitOrder}/>
                </div>
            }
            {showPay &&
                <div className="checkout-left-payment">
                    <p>Оплата</p>
                </div>
            }
        </section>
    )
}
export default CheckoutLeft
