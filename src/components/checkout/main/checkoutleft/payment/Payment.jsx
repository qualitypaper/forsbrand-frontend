import React, {useEffect, useRef, useState} from 'react';
import {BASE_URL} from "../../../../../assets/constant";
import "./Payment.scss"

export const Payment = ({submitOrder}) => {
    const [url, setUrl] = useState('');
    const [amountToPay, setAmountToPay] = useState(0);
    const [orderId, setOrderId] = useState(0);
    const paymentUrlRef=  useRef()

    const paymentUrl = (oi) => {

        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://pay.fondy.eu/static_common/v1/checkout/ipsp.js';
        scriptTag.async = true;
        scriptTag.onload = () => {
            //eslint-disable no-undef
            //eslint-disable-next-line
            const button = $ipsp.get('button');
            button.setMerchantId(1396424);
            button.setAmount(10, 'UAH');
            button.setHost('pay.fondy.eu');
            oi
                ? button.setResponseUrl(`${BASE_URL}/order/payment?order_id=${oi}`)
                : button.setResponseUrl(`${BASE_URL}/order/payment?order_id=1`);
            console.log('url', button.getUrl())
            paymentUrlRef.current = button.getUrl();
        };

        document.body.appendChild(scriptTag);
        return paymentUrlRef.current;
    }
    const handler = async () => {

        const result = await submitOrder();
        console.log(result);
        debugger
        if (!result.id) {
            alert("Doesn't work");
            return;
        }
        if (result.id && result.totalPrice) {
            window.location.href = paymentUrl(Number.parseInt(result.id));
        } else {
            // show notification message about unsuccessful order creation
            alert("Пиздец сайт лежит, напишите в тг пж. А то я не понимаю почему и где????")
        }
    }

    return (
        <>
            <button id='button' onClick={handler} className="buttonFondy">Pay With Fondy</button>
        </>
    );
};

export default Payment;