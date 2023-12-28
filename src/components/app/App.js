import React, { createContext, useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ProductPage } from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import axios from "axios";
import { BASE_URL } from "../../assets/constant";
import SuccessfulOrder from "../checkout/successfulorder/SuccessfulOrder";

export const AppContext = createContext();

const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const [windowItems, setWindowItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  //const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
  const [windowProduct, setWindowProduct] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [currentCardData, setCurrentCardData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [openPromotionalCode, setOpenPromotionalCode] = useState(false);
  const [openNoteCode, setOpenNoteCode] = useState(false);
  const [pageActive, setPageActive] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [idActiveCircle, setIdActiveCircle] = React.useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [clothesPerPage] = React.useState(9);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [currentClothing, setCurrentClothing] = React.useState({});
  const [showData, setShowData] = React.useState(false);
  const [showPay, setShowPay] = React.useState(true);
  const [showPayOpen, setShowPayOpen] = React.useState(false);
  const [orderData, setOrderData] = React.useState(false);
  const [inputData, setInputData] = React.useState(true);
  const [deliveryMethod, setDeliveryMethod] = React.useState(true);
  const [displayText, setDisplayText] = useState("");
  const [selectedButton, setSelectedButton] = useState(0);
  const [deliveryOpenMethod, setDeliveryOpenMethod] = useState(false);
  const [selectedOption, setSelectedOption] = React.useState({});
  const addToOrder = (item) => {
    console.log(item);
    const temp = cartItems.find((e) => e.id === item.id && e.size === item.size);
    console.log(cartItems);
    if (temp) {
        if (item.quantity) {
          temp.quantity += item.quantity;
        } else {
          temp.quantity += 1;
        }
        setCartItems([...cartItems]);
    } else {
      if (!item.quantity) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      } else {
        setCartItems([...cartItems, { ...item }]);
      }
    }
    console.log(cartItems);
  };

  const removeFromOrder = (item) => {
    const temp = cartItems.find((e) => e.id === item.id && e.size === item.size);

    if (temp) {
      if (temp.quantity > 1) {
        temp.quantity -= 1;
        setCartItems([...cartItems]);
      } else {
        setCartItems((prevItems) =>
          prevItems.filter((product) => product.id !== item.id)
        );
        setQuantity(1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleQuantityChange = (item, quantity) => {
    console.log("item", item);
    console.log("quantity", quantity);
    setCartItems(
      cartItems.map((i) =>
        i.id === item.id ? { ...item, quantity: quantity } : { ...i }
      )
    );
  };
  useEffect(() => {
    const localStorageItem = JSON.parse(localStorage.getItem("cart"));
    if (localStorageItem) {
      setCartItems(localStorageItem);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // const checkPromocode = async (promocode) => {
  //   const res = await axios.get(
  //     `${BASE_URL}/promocodes/check?promocode=${promocode}`
  //   );
  //   if (res.data) {
  //     if (res.data.valid) {
  //       return { valid: true, discount: Number.parseInt(res.data.discount) };
  //     } else {
  //       return { valid: false };
  //     }
  //   }
  // };

  return (
    <AppContext.Provider
      value={{
        removeFromOrder,
        cartOpened,
        setCartOpened,
        windowItems,
        setWindowItems,
        cartItems,
        setCartItems,
        windowProduct,
        setWindowProduct,
        cardData,
        setCardData,
        quantity,
        setQuantity,
        currentImageIndex,
        setCurrentImageIndex,
        selectedSizeIndex,
        setSelectedSizeIndex,
        openPromotionalCode,
        setOpenPromotionalCode,
        openNoteCode,
        setOpenNoteCode,
        pageActive,
        setPageActive,
        loading,
        setLoading,
        counter,
        setCounter,
        currentPage,
        setCurrentPage,
        clothesPerPage,
        pageNumber,
        setPageNumber,
        currentCardData,
        setCurrentCardData,
        currentClothing,
        setCurrentClothing,
        open,
        setOpen,
        selected,
        setSelected,
        idActiveCircle,
        setIdActiveCircle,
        cartItemCount,
        setCartItemCount,
        totalCost,
        setTotalCost,
        showData,
        setShowData,
        orderData,
        setOrderData,
        inputData,
        setInputData,
        deliveryOpenMethod,
        setDeliveryOpenMethod,
        displayText,
        setDisplayText,
        deliveryMethod,
        setDeliveryMethod,
        selectedOption,
        setSelectedOption,
        showPay,
        setShowPay,
        showPayOpen,
        setShowPayOpen,
        selectedButton,
        setSelectedButton,
        addToOrder,
        handleQuantityChange,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home itemsPerPage={9} />} />
          <Route path="/product-page/:id" element={<ProductPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
