import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../../../../assets/constant";
import "./Payment.scss"

export const Payment = ({ submitOrder}) => {
    const [url, setUrl] = useState()
    const [orderId, setOrderId] = useState();
    
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
            orderId 
            ? button.setResponseUrl(`${BASE_URL}/order/payment?order_id=${orderId}`)
            : button.setResponseUrl(`${BASE_URL}/order/payment?order_id=1`);

            setUrl(button.getUrl());
        };

        document.body.appendChild(scriptTag);
    }, [orderId]);


    const handler = async () => {
        const result = await submitOrder();
        console.log(result);
        if(result){
            setOrderId(result.id);
            setTimeout(() => {
                console.log('redirecting to ' + url);
                window.location.href = url
            }, 2000);
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