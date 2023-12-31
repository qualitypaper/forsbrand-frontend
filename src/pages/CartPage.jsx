import { Footer } from "../components/mainpage/footer";

import { useContext, useEffect } from "react";
import { AppContext } from "../components/app/App";
import { useNavigate, useParams } from "react-router-dom";
import { ProductJson } from "../assets/clothes";
import "./CartPage.scss";
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
    const selectedCard = ProductJson.find(
      (item) => item.id === Number.parseInt(id)
    );
    if (selectedCard) {
      setCardData(selectedCard);
    }
  }, [id]);
  
  const navigate = useNavigate();

  const deleteToOrder = (element) => {
    const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size)
    setCartItems(temp)
    if(temp.length === 0){
        localStorage.setItem('cart', null);
    } else {
        localStorage.setItem('cart', temp);
    }
};

  return (
    <>
      <div className="mid">
        <div className="mid_background1">
          <div className="one">
            <CartFullOrder deleteToOrder={deleteToOrder} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
