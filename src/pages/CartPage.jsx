import {Footer} from "../components/mainpage/footer";

import {useContext, useEffect} from "react";
import {AppContext} from "../components/app/App";
import { useNavigate, useParams} from "react-router-dom";
import {ProductJson} from "../assets/clothes";
import "./CartPage.scss"
import CartFullOrder from "../components/cartpage/main/CartFullOrder";

const CartPage = () => {
    const {
        cardData,
        setCardData,
        setCartItems,
        windowItems,
        setWindowProduct,
        setCartOpened,
        cartItems,
    } = useContext(AppContext);


    const { id } = useParams();
    const addToCartFromWindow = (item) => {
        addToOrder(item);
        setWindowProduct(false);
    };
    const openCart = () => {
        setCartOpened(true);
    };

    const addToOrder = (item) => {
            const temp = cartItems.find((e) => e.id === item.id);
            if (temp) {
                temp.quantity += 1;
                setCartItems([...cartItems]);
            } else {
                setCartItems([...cartItems, { ...item, quantity: 1 }]);
            }
    };
    useEffect(() => {
        const selectedCard = ProductJson.find(item => item.id === Number.parseInt(id));
        if (selectedCard) {
            setCardData(selectedCard);
        }
    }, [id]);
    const navigate = useNavigate();

    const deleteToOrder = (id) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(product => product.id !== id);

            if (updatedItems.length === 0) {
                navigate('/');
            }
            return updatedItems;
        });
    }

    return (
        <>
            <div className="mid">
                <div className="mid_background1">
                    <div className="one">
                                <CartFullOrder items={cartItems} deleteToOrder={deleteToOrder} cardData={cardData}  onAdd={addToOrder} product={windowItems} onClickAddToCart={addToCartFromWindow}
                                               openCart={openCart}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CartPage