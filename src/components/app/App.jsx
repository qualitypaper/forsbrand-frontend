import React, {createContext, useEffect, useState} from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home";
import {ProductPage} from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import {CheckoutPage} from "../../pages/CheckoutPage";
import Delivery from "../../pages/Delivery";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import Contacts from "../../pages/Contacts";
import axios from "axios";
import {BASE_URL} from "../../assets/constant";
import Error from "../../pages/Error";
import DownWebSite from "../../pages/DownWebSite";
import SuccessfulOrder from "../checkout/successfulorder/SuccessfulOrder";
import UnsuccessfulOrder from "../checkout/unsuccessfulorder/UnsuccessfulOrder";

export const AppContext = createContext();

const App = () => {
    const [cartOpened, setCartOpened] = useState(false);
    const [windowItems, setWindowItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    //const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
    const [windowProduct, setWindowProduct] = useState(false);
    const [imagesBoxOpened, setImagesBoxOpened] = useState(false);
    const [openSeeSized, setOpenSeeSized] = useState(false);
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
    const [buttonClicked, setButtonClicked] = useState(false);
    const [promocode, setPromocode] = useState({});
    const [clothesPerPage, setClothesPerPage] = useState(9);


    const handleResize = () => {
        if (window.innerWidth <= 813) {
            setClothesPerPage(10);
        } else {
            setClothesPerPage(9);
        }
    };


    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const addToOrder = (item) => {
        console.log(item);

        const temp = cartItems.find(
            (e) => e.id === item.id && e.size === item.size
        );
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
        const temp = cartItems.find(
            (e) => e.id === item.id && e.size === item.size
        );

        if (temp) {
            if (temp.quantity > 1) {
                temp.quantity -= 1;
                setCartItems([...cartItems]);
            } else {
                const temp = cartItems.filter(
                    (product) => product.id !== item.id || product.size !== item.size
                );
                setCartItems(temp);
                localStorage.setItem("cart", JSON.stringify(temp));
            }
        }
    };

    const handleQuantityChange = (item, quantity) => {
        console.log("item", item);
        console.log("quantity", quantity);
        setCartItems(
            cartItems.map((i) =>
                i.id === item.id && i.size === item.size
                    ? { ...item, quantity: quantity }
                    : { ...i }
            )
        );
    };


    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    useEffect(() => {
        try {
            const localStorageItem = JSON.parse(localStorage.getItem("cart"));
            if (localStorageItem) {
                setCartItems(localStorageItem);
            }
        }
        catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }, []);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
        setTotalCost(
            cartItems.reduce(
                (total, cartItem) => total + cartItem.currentPrice * cartItem.quantity,
                0
            )
        );
    }, [cartItems]);
    //
    const checkPromocode = async (promocode) => {
        const res = await axios.get(
            `${BASE_URL}/promocodes/check?promocode=${promocode}`
        );

        if (res.status === 401) return { valid: false };
        if (res.data) {
            if (res.data.valid) {
                return { valid: true, discount: Number.parseInt(res.data.discount) };
            } else {
                return { valid: false };
            }
        }
    };

    return (
        <AppContext.Provider
            value={{
                promocode,
                setPromocode,
                checkPromocode,
                addToOrder,
                handleQuantityChange,
                removeFromOrder,
                cartOpened,
                setCartOpened,
                windowItems,
                setWindowItems,
                cartItems,
                setCartItems,
                windowProduct,
                imagesBoxOpened,
                setImagesBoxOpened,
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
                buttonClicked,
                setButtonClicked,
                openSeeSized,
                setOpenSeeSized,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<Home itemsPerPage={9} />} />
                    <Route path="/product-page/:id" element={<ProductPage />} />
                    <Route path="/cart-page" element={<CartPage />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/website-down" element={<DownWebSite />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/success" element={<SuccessfulOrder />} />
                    <Route path="/failure" element={<UnsuccessfulOrder />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
};

export default App;
