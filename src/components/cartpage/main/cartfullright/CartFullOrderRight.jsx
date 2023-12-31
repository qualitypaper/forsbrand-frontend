import React, {useContext, useState} from 'react'
import CartItem from "../cartitem/CartItem";
import sale from "../../../../assets/images/sale.svg";
import "./CartFullOrderRight.scss"
import {AppContext} from "../../../app/App";

const CartFullOrderRight = ({deleteToOrder}) => {
    const {
        cartItems,
        handleQuantityChange,
        openPromotionalCode,
        setOpenPromotionalCode,
        checkPromocode,
    } = useContext(AppContext)
    const [promocode, setPromocode] = useState('');

    const handlePromocodeChange = (e) => {
        setPromocode(e.target.value);
    }

    const checkPromocodeField = () => {
        const res = checkPromocode(promocode);
        if(res.valid) {
            const {discount} = res;
            // TODO: show the discount, and calculate the new total cost with the discount
        } else {
            // TODO: make an error message of invalid promocode
        }
    }
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
export default CartFullOrderRight
