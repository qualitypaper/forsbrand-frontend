import React, {useContext, useState} from 'react'
import sale from "../../../../../assets/images/sale.svg";
import {AppContext} from "../../../../app/App";
import "./PromocodeOrder.scss"


const PromocodeOrder = () => {
    const {
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode
    } = useContext(AppContext);

    const [promocode, setPromocode] = useState('');
    const [notification, setNotification] = useState("");

    const checkPromo = async () => {
        const res = await checkPromocode(promocode);
        if (res) {
            if (res.valid) {
                setNotification({
                    type: 'success',
                    message: `Промокод дійсний! Знижка: ${res.discount}%`
                });
            } else {
                setNotification({
                    type: 'error',
                    message: 'Промокод недійсний. Спробуйте ще раз.'
                });
            }
        }
    };

    const closeNotification = () => {
        setNotification("");
    };

    return (
        <div className="checkout-right__order-promo-main">
            <div className="checkout-right__order-promo-text">
                <img width={20} height={20} src={sale} alt="Sale" />
                <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
            </div>
            {openPromotionalCode && (
                <div className="checkout-right__order-promo-open">
                    <input
                        className="inp2"
                        type="text"
                        placeholder="Введіть промокод"
                        value={promocode}
                        onChange={(e) => setPromocode(e.target.value)}
                    />
                    <button onClick={checkPromo}>
                        <p>Застосувати</p>
                    </button>
                </div>
            )}
            {notification && (
                <div className={`notification ${notification.type}`} onClick={closeNotification}>
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default PromocodeOrder;
