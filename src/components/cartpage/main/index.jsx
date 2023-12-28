import React from 'react'
import CartFullOrder from './CartFullOrder';


const CartOrderMain = ({cardData, onAdd, product, onClickAddToCart, removeFromCart, openCart, deleteToOrder}) => {
    return (
        <div>
                    <CartFullOrder removeFromCart={removeFromCart} deleteToOrder={deleteToOrder}  onAdd={onAdd} card={cardData} product={product} onClickAddToCart={onClickAddToCart} openCart={openCart}/>
        </div>
    )
};

export default CartOrderMain;