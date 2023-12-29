import React from 'react'
import CartFullOrder from './CartFullOrder';


const CartOrderMain = ({ onClickAddToCart, openCart, deleteToOrder}) => {
    return (
        <div>
                    <CartFullOrder deleteToOrder={deleteToOrder} onClickAddToCart={onClickAddToCart} openCart={openCart}/>
        </div>
    )
};

export default CartOrderMain;