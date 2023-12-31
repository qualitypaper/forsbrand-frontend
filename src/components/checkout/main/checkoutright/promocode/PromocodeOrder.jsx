import React, {useContext, useState} from 'react'
import sale from "../../../../../assets/images/sale.svg";
import {AppContext} from "../../../../app/App";
import "./PromocodeOrder.scss"

const PromocodeOrder = () => {
    const  {
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode
    } = useContext(AppContext)
    const [promocode, setPromocode] = useState('');

    const checkPromo = async () => {
        const res = await checkPromocode(promocode);
        if(res) {
            if(res.valid) {
                // make a notification, that promocode is valid and the discount which user will get
            } else {
                // make a notification, that the promocode is not valid

            }
        }
    }

    return (
        <div className="checkout-right__order-promo-main">
            <div className="checkout-right__order-promo-text">
                <img width={20} height={20} src={sale} alt="Sale"/>
                <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
            </div>
            {openPromotionalCode && (
                <div className="checkout-right__order-promo-open">
                    <input
                        className="inp2"
                        type="text"
                        placeholder="Веддіть промокод"
                    />
                    <button onClick={checkPromo}>
                        <p>Застосувати</p>
                    </button>
                </div>
            )}
        </div>
    )
}
export default PromocodeOrder
