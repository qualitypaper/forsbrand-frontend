import React, {useContext, useState} from 'react'
import sale from "../../../../../assets/images/sale.svg";
import {AppContext} from "../../../../app/App";
import "./PromocodeOrder.scss"


const PromocodeOrder = ({ handlePromocodeChange } ) => {
    const {
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode,
        promocode, 
        setPromocode
    } = useContext(AppContext);

    const [promocodeText, setPromocodeText] = useState('');
    const [notification, setNotification] = useState("");

    const checkPromo = async () => {
        const res = await checkPromocode(promocodeText);
        if (res) {
            if (res.valid) {
                setPromocode({promocode: promocodeText, discount: res.discount})
                handlePromocodeChange(promocodeText)
                setPromocodeText('')
                setNotification({
                    type: 'success',
                    message: `Промокод дійсний! Знижка: ${res.discount}%`
                });
                setTimeout(() => {
                    setOpenPromotionalCode(false)                    
                    closeNotification()
                }, 2000)
            } else {
                setOpenPromotionalCode(true)
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
                <p onClick={() => !promocode.promocode && setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
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
            {notification && (
                <div className={`notification ${notification.type}`} onClick={closeNotification}>
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default PromocodeOrder;
