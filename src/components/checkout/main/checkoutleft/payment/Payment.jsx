import React, {useEffect, useRef, useState} from 'react';
import {BASE_URL} from "../../../../../assets/constant";
import "./Payment.scss"

const sleep = ms => new Promise(r => setTimeout(r, ms));


function loadScriptAsync(src) {
    return new Promise((resolve, reject) => {
        const scriptTag = document.createElement('script');
        scriptTag.src = src;
        scriptTag.async = true;
        scriptTag.onload = resolve;
        scriptTag.onerror = reject;
        document.body.appendChild(scriptTag);
    });
}

export const Payment = ({submitOrder}) => {
    const [url, setUrl] = useState('');
    const [amountToPay, setAmountToPay] = useState(0);
    const [orderId, setOrderId] = useState(0);
    const paymentUrlRef = useRef()


    // useEffect(() => {
    //     const createOrder = async () => {
    //         const result = await submitOrder();
    //         debugger
    //         console.log(result);
    //         if (!result.id) {
    //             alert("Doesn't work the order creation");
    //             return;
    //         }
    //         if (result.id && result.totalPrice) {
    //             const scriptTag = document.createElement('script');
    //             scriptTag.src = 'https://pay.fondy.eu/static_common/v1/checkout/ipsp.js';
    //             scriptTag.async = true;
    //             scriptTag.onload = () => {
    //                 //eslint-disable no-undef
    //                 //eslint-disable-next-line
    //                 const button = $ipsp.get('button');
    //                 button.setMerchantId(1396424);
    //                 button.setAmount(result.totalPrice, 'UAH');
    //                 button.setHost('pay.fondy.eu');
    //                 result.id
    //                     ? button.setResponseUrl(`${BASE_URL}/order/payment?order_id=${result.id}`)
    //                     : button.setResponseUrl(`${BASE_URL}/order/payment?order_id=1`);
    //                 console.log('url', button.getUrl())
    //                 paymentUrlRef.current = button.getUrl();
    //             };
    //
    //             document.body.appendChild(scriptTag);
    //             console.log('paymentUrlRef', paymentUrlRef.current);
    //             if(!paymentUrlRef.current) {
    //                 alert("Payment url wasn't set");
    //             }
    //         }
    //     }
    //     createOrder().then();
    // }, []);

    const handler = async () => {

        const result = await submitOrder();
        console.log(result);
        debugger
        if (!result.id) {
            alert("Doesn't work");
            return;
        }
        if (result.id && result.totalPrice) {

            await loadScriptAsync('https://pay.fondy.eu/static_common/v1/checkout/ipsp.js');
            //eslint-disable no-undef
            //eslint-disable-next-line
            const button = $ipsp.get('button');
            // button.setMerchantId(1396424);
            button.setMerchantId(1540226);
            button.setAmount(result.totalPrice, 'UAH');
            button.setHost('pay.fondy.eu');
            result.id
                ? button.setResponseUrl(`${BASE_URL}/order/payment?order_id=${result.id}`)
                : button.setResponseUrl(`${BASE_URL}/order/payment?order_id=1`);
            console.log('url', button.getUrl());

            // Introduce a delay using sleep or setTimeout if necessary
            await sleep(300);

            paymentUrlRef.current = button.getUrl();
            console.log('paymentUrlRef', paymentUrlRef.current);

            if (paymentUrlRef.current) {
                window.location.href = paymentUrlRef.current;
            } else {
                alert("Payment url wasn't set");
            }
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
