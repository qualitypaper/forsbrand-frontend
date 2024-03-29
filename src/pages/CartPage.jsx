import {Footer} from "../components/mainpage/footer";

import React, {useContext, useEffect} from "react";
import {AppContext} from "../components/app/App";
import {useParams} from "react-router-dom";
import {ProductJson} from "../assets/clothes";
import "./CartPage.scss";
import CartFullOrder from "../components/cartpage/main/CartFullOrder";
import {animated, useSpring} from "react-spring";
import {Header} from "../components/productpage/header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  }, [id, setCardData]);


  const deleteToOrder = (element) => {
    const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size)
    setCartItems(temp)
    if (temp.length === 0) {
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
      <div className="mid" style={{
        backgroundImage: "url(../assets/images/background_image.png)"
      }}>
        <div className="mid_background1">
          <div className="one">
            <Header maintext={<div className="header_back">
              <ArrowBackIcon />
              <h4 className="BACK">НАЗАД</h4>
            </div>} />
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
