import React, { useEffect, useState} from 'react';
import {BASE_URL} from "../../../../../assets/constant";
import list1 from "../../../../../assets/images/list.svg";
import "./Payment.scss"

export const Payment = () => {
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

    const handler = () => {
        console.log('redirecting to ' + url);
        window.location.href = url
    }

    return (
        <>
            <button id='button' onClick={handler} className="buttonFondy">Pay With Fondy</button>
        </>
    );
};

export default Payment;