import { Footer } from "../components/mainpage/footer";

import React, { useContext, useEffect } from "react";
import { AppContext } from "../components/app/App";
import {useParams } from "react-router-dom";
import { ProductJson } from "../assets/clothes";
import "./CartPage.scss";
import CartFullOrder from "../components/cartpage/main/CartFullOrder";
import {useSpring, animated} from "react-spring";
import {Header} from "../components/productpage/header";

const CartPage = () => {
  const {
    setCardData,
    setCartItems,
    cartItems,
  } = useContext(AppContext);

  const { id } = useParams();


  useEffect(() => {
    const selectedCard = ProductJson.find(
      (item) => item.id === Number.parseInt(id)
    );
    if (selectedCard) {
      setCardData(selectedCard);
    }
  }, [id]);


  const deleteToOrder = (element) => {
    const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size)
    setCartItems(temp)
    if(temp.length === 0){
        localStorage.setItem('cart', null);
    } else {
        localStorage.setItem('cart', temp);
    }
};
  const cartPageAnimation = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  });

  return (
    <>
      <div className="mid">
        <div className="mid_background1">
          <div className="one">
            <Header text="CartPage" />
            <animated.div style={cartPageAnimation}>
            <CartFullOrder deleteToOrder={deleteToOrder} />
            </animated.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
