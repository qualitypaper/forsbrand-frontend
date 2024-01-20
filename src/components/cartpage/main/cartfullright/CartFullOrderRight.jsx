import React, {useContext} from 'react'
import CartItem from "../cartitem/CartItem";
import "./CartFullOrderRight.scss"
import {AppContext} from "../../../app/App";

const CartFullOrderLeft = ({deleteToOrder}) => {
    const {
        cartItems,
        handleQuantityChange,
    } = useContext(AppContext)
    // const [notification, setNotification] = useState("")
    // const [setPromocode] = useState('');

    // const handlePromocodeChange = (e) => {
    //     setPromocode(e.target.value);
    // }

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
            
        </div>
    )
}
export default CartFullOrderLeft
