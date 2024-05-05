import React, { useContext, useState } from "react";
import Payment from "./payment/Payment";
import { AppContext } from "../../../app/App";
import "./CheckoutLeft.scss";
import ShippingOptions from "./shippingoptions/ShippingOptions";
import CheckoutInputs from "./checkoutinputs/CheckoutInputs";
import PaymentWidget from "../../../../pages/Payment";

const CheckoutLeft = ({ handleChange, submitOrder, orderId, amountToPay, name, email }) => {
  const { showPay, showPayOpen } = useContext(AppContext);
  const [deliveryState, setDeliveryState] = useState(false);


  return (
    <section className="checkout-left">
      <CheckoutInputs
        handleChange={handleChange}
        deliveryState={deliveryState}
      />
      <ShippingOptions
        handleChange={handleChange}
        setDeliveryState={setDeliveryState}
      />

      {showPay && (
        <div className="checkout-left-payment">
          <p>Оплата</p>
        </div>
      )}
      {showPayOpen && (
        <div className="checkout-left-delivery2">
          <PaymentWidget submitOrder={submitOrder} orderId={orderId} amount={amountToPay} productCount={0} email={email} name={name}/>
        </div>
      )}
    </section>
  );
};
export default CheckoutLeft;
