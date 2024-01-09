import React, {useContext, useState} from 'react'
import sale from "../../../../../assets/images/sale.svg";
import {AppContext} from "../../../../app/App";
import "./PromocodeOrder.scss"
import { App} from 'antd';

const PromocodeOrder = ({ handlePromocodeChange } ) => {
    const {
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode,
        promocode,
        setPromocode
    } = useContext(AppContext);
    const [promocodeText, setPromocodeText] = useState('');
    const [notifications, setNotifications] = useState("");

    const checkPromo = async () => {
        const res = await checkPromocode(promocodeText);
        if (res) {
            if (res.valid) {
                setPromocode({promocode: promocodeText, discount: res.discount})
                handlePromocodeChange(promocodeText)
                setPromocodeText('')
                setNotifications({ message: <div className='mt-3'>`Промокод дійсний! <b>${res.discount}%`</b> </div>});
                setTimeout(() => {
                    setOpenPromotionalCode(false)
                    closeNotification()
                }, 2000)
            } else {
                setOpenPromotionalCode(true)
                setNotifications({ message: <div className='mt-3'>Промокод недійсний. Спробуйте ще раз.</div>});
            }
        }
    };
 
    const closeNotification = () => {
        setNotifications("");
    };

    return (
        <div className="checkout-right__order-promo-main">
            <div className="checkout-right__order-promo-text">
                <img width={20} height={20} src={sale} alt="Sale" />
                <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
            </div>
            {(!promocode || openPromotionalCode) && (
                <div className="checkout-right__order-promo-open">
                    <input
                        className="inp2"
                        type="text"
                        placeholder="Введіть промокод"
                        value={promocodeText}
                        onChange={(e) => setPromocodeText(e.target.value)}
                    />
                    <button onClick={checkPromo}>
                        <p>Застосувати</p>
                    </button>
                </div>
            )}
            {notifications && (
                <div className={`notification ${notifications.type}`} onClick={closeNotification}>
                    {notifications.message}
                </div>
            )}
        </div>
    );
};

export default PromocodeOrder;
