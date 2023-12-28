import {Footer} from "../components/mainpage/footer";

import CartOrderMain from "../components/cartpage/main";
import {useContext, useEffect} from "react";
import {AppContext} from "../components/app/App";
import { useNavigate, useParams} from "react-router-dom";
import {ProductJson} from "../assets/clothes";
import "./CartPage.scss"

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

    const removeFromOrder = (item) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(product => {
                if (product.id === item.id) {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                    } else return null;
                }
                return product;
            }).filter(Boolean);

            if (updatedItems.length === 0) {
                navigate('/');
            }

            return updatedItems;
        });
    };
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
                                <CartOrderMain removeFromCart={removeFromOrder} deleteToOrder={deleteToOrder} cardData={cardData}  onAdd={addToOrder} product={windowItems} onClickAddToCart={addToCartFromWindow}
                                               openCart={openCart}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CartPage