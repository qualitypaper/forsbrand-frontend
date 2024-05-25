import React, { useContext, useState } from "react";
import Payment from "./payment/Payment";
import { AppContext } from "../../../app/App";
import "./CheckoutLeft.scss";
import ShippingOptions from "./shippingoptions/ShippingOptions";
import CheckoutInputs from "./checkoutinputs/CheckoutInputs";
import PaymentWidget from "../../../../pages/Payment";
import { Spin } from "antd";

const CheckoutLeft = ({
  handleChange,
  submitOrder,
  orderId,
  amountToPay,
  name,
  email,
  merchantSignature,
  setMerchantSignature
}) => {
  const { showPay, showPayOpen } = useContext(AppContext);
  const [deliveryState, setDeliveryState] = useState(false);
  const [id, setId] = useState(0);

  return (
    <section className="checkout-left">
      <CheckoutInputs
        handleChange={handleChange}
        deliveryState={deliveryState}
      />
      <ShippingOptions
        handleChange={handleChange}
        submitOrder={submitOrder}
        setDeliveryState={setDeliveryState}
        setMerchantSignature={setMerchantSignature}
        setOrderId={setId}
        amount={amountToPay}
      />

      {showPay && (
        <div className="checkout-left-payment">
          <p>Оплата</p>
        </div>
      )}
      {showPayOpen && (
        <div className="checkout-left-delivery2">
          <PaymentWidget
            submitOrder={submitOrder}
            orderId={id}
            signature={merchantSignature}
            amount={amountToPay}
            productCount={0}
            email={email}
            name={name}
          />
        </div>
      )}

      {!showPay && !showPayOpen && (
        <div>
          <Spin className="checkout-left-delivery2 d-flex justify-center"/>
        </div>
      )}
    </section>
  );
};
export default CheckoutLeft;
