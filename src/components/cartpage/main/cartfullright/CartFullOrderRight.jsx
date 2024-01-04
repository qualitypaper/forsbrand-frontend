import React, {useContext, useState} from 'react'
import CartItem from "../cartitem/CartItem";
import sale from "../../../../assets/images/sale.svg";
import "./CartFullOrderRight.scss"
import {AppContext} from "../../../app/App";

const CartFullOrderLeft = ({deleteToOrder}) => {
    const {
        cartItems,
        handleQuantityChange,
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode,
    } = useContext(AppContext)
    // const [notification, setNotification] = useState("")
    const [promocode, setPromocode] = useState('');

    const handlePromocodeChange = (e) => {
        setPromocode(e.target.value);
    }

    // const checkPromocodeField = () => {
    //     const res = await checkPromocode(promocode);
    //     if (res) {
    //         if (res.valid) {
    //             setNotification({
    //                 type: 'success',
    //                 message: `Промокод дійсний! Знижка: ${res.discount}%`
    //             });
    //         } else {
    //             setNotification({
    //                 type: 'error',
    //                 message: 'Промокод недійсний. Спробуйте ще раз.'
    //             });
    //         }
    //     }
    // };
    return (
        <div className="cart__order-full-right">
            <nav className="cart__order-full-nav">
                <p className="cart__order-full-nav-text">Кошик</p>
            </nav>
            {cartItems.map((item, index) => (
                <CartItem
                    key={index}
                    images={item.images}
                    name={item.name}
                    size={item.size}
                    id={item.id}
                    currentPrice={item.currentPrice}
                    originalPrice={item.originalPrice}
                    availableSizes={item.availableSizes}
                    quantity={item.quantity}
                    // setQuantity={handleQuantityChange}
                    setQuantity={(quantity) => handleQuantityChange(item, quantity)}
                    product={item}
                    deleteToOrder={() => deleteToOrder(item)}
                />
            ))}
            <div className="cart__order-full-list">
                <div className="cart__order-full-list1">
                    <img width={20} height={20} src={sale} alt="Sale" />
                    <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>
                        Введіть промокод
                    </p>
                </div>
                {openPromotionalCode && (
                    <div className="cart__order-full-list1-open">
                        <input
                            className="inp2"
                            type="text"
                            placeholder="Веддіть промокод"
                            onChange={handlePromocodeChange}
                        />
                        <button onClick={checkPromocodeField}>Застосувати</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default CartFullOrderLeft
