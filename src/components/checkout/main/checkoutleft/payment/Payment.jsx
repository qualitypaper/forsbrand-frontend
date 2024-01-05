import React, { useEffect, useState} from 'react';
import {BASE_URL} from "../../../../../assets/constant";
import "./Payment.scss"

export const Payment = ({ submitOrder}) => {
    const [url, setUrl] = useState()
    const orderId = 1

    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://pay.fondy.eu/static_common/v1/checkout/ipsp.js';
        scriptTag.async = true;
        scriptTag.onload = () => {
            //eslint-disable no-undef
            //eslint-disable-next-line
            const button = $ipsp.get('button');
            button.setMerchantId(1396424);
            button.setAmount(10.99, 'USD');
            button.setHost('pay.fondy.eu');
            button.setResponseUrl(`${BASE_URL}/order/payment?order_id=${orderId}`)
            setUrl(button.getUrl());
        };

        document.body.appendChild(scriptTag);
    }, []);


    const handler = async () => {
        if(submitOrder()){
            console.log('redirecting to ' + url);
            window.location.href = url
        } else {
            // show notification message about unsuccessful order creation
        }
    }

    return (
        <>
            <button id='button' onClick={handler} className="buttonFondy">Pay With Fondy</button>
        </>
    );
};

export default Payment;