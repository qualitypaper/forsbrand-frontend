import React, {useContext, useState} from 'react'
import Payment from "./payment/Payment";
import {AppContext} from "../../../app/App";
import "./CheckoutLeft.scss"
import ShippingOptions from "./shippingoptions/ShippingOptions";
import CheckoutInputs from "./checkoutinputs/CheckoutInputs";

const CheckoutLeft = ({ handleChange, submitOrder, orderId, amountToPay }) => {
    const {
        showPay,
        showPayOpen,
    } = useContext(AppContext);
    const [deliveryState, setDeliveryState] = useState(false);
    
    return (
        <section className="checkout-left">
            <CheckoutInputs handleChange={handleChange} deliveryState={deliveryState}/>
            <ShippingOptions handleChange={handleChange} setDeliveryState={setDeliveryState}/>
            {showPayOpen &&
                <div className="checkout-left-delivery2">
                    <Payment submitOrder={submitOrder} orderId={orderId} amountToPay={amountToPay} />
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
