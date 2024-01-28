import React, {useContext, useEffect, useState} from 'react';
import {Footer} from '../components/mainpage/footer';
import {HeaderMain} from '../components/mainpage/headermain';
import {Main} from '../components/mainpage/main/Main';
import Drawer from '../components/mainpage/drawer';
import Window from '../components/mainpage/window';
import {AppContext} from "../components/app/App";
import "./Home.scss";
import {BASE_URL, ERROR_HREF} from '../assets/constant';
import PreLoader from "../components/preloader/PreLoader";
import {animated, useSpring} from 'react-spring';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const {
        cartOpened,
        setCartOpened,
        windowItems,
        setWindowItems,
        cartItems,
        cardData,
        setCartItems,
        windowProduct,
        setWindowProduct,
        setCardData,
        setCurrentPage,
        clothesPerPage,
        setLoading,
        currentCardData,
        setCurrentCardData,
        removeFromOrder
    } = useContext(AppContext);
    const [itemOffset, setItemOffset] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const getClothes = async () => {
            setLoading(true);

            // try {
            //     const cachedData = localStorage.getItem('clothesData');
            //     if (cachedData) {
            //         setCardData(JSON.parse(cachedData));
            //         setCurrentCardData(JSON.parse(cachedData));
            //     } else {
            // const response = await axios.get(`${BASE_URL}/product/getAll`);
            // localStorage.setItem('clothesData', JSON.stringify(response.data));
            // setCardData(response.data);
            // setCurrentCardData(response.data);
            //
            // } catch (error) {
            //     console.error(error);
            //     navigate(ERROR_HREF);
            // } finally {
            //     setLoading(false);
            // }
            try {
                const response = await axios.get(`${BASE_URL}/product/getAll`);
                setCardData(response.data);
                setCurrentCardData(response.data);
            } catch (error) {
                console.error(error);
                navigate(ERROR_HREF);
            } finally {
                setLoading(false);
            }
        };

        getClothes();
    }, [navigate, setCardData, setCurrentCardData, setLoading]);

    const deleteToOrder = (element) => {
        const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size);
        setCartItems(temp);
        if (temp.length === 0) {
            localStorage.setItem('cart', null);
        } else {
            localStorage.setItem('cart', JSON.stringify(temp));
        }
    };

    const onPlus = (product) => {
        setWindowItems(product);
        setWindowProduct(true);
    };


    const openCart = () => {
        setCartOpened(true);
    };

    // const addToCartFromWindow = (item) => {
    //     addToOrder(item);
    // }

    const endOffset = itemOffset + clothesPerPage;
    const currentClothes = Array.isArray(currentCardData) ? currentCardData.slice(itemOffset, endOffset) : [];
    const pageCount = Math.ceil(currentCardData.length / clothesPerPage);

    const handlePageClick = (pageNumber) => {
        const newOffset = ((pageNumber - 1) * clothesPerPage) % cardData.length;
        setItemOffset(newOffset);
    };
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const homeAnimation = useSpring({
        opacity: 1,
        from: {opacity: 0},
    });

    const cartItemCount = cartItems.length;
    return (
        <animated.div style={homeAnimation}>
            <PreLoader/>
            <div className="mid" style={{
                backgroundImage: "url(../assets/images/background_image.png)"
            }}>
                <div className="mid_background1">
                    <div className="one1">
                        <HeaderMain cartItemCount={cartItemCount} onClickCart={() => setCartOpened(true)}/>
                        {cartOpened && (
                            <Drawer
                                deleteToOrder={deleteToOrder}
                                items={cartItems}
                                removeFromCart={removeFromOrder}
                                onClickClosed={() => setCartOpened(false)}
                            />
                        )}
                        <Main
                            clothesPerPage={clothesPerPage}
                            totalClothes={cardData.length}
                            items={windowItems}
                            previousPage={paginate}
                            onPlus={onPlus}
                            currentItems={currentClothes}
                            onPageChange={handlePageClick}
                            pageCount={pageCount}
                            previousLabel={''}
                            nextLabel={''}
                            containerClassName={'pages'}
                            pageLinkClassName={'previous '}
                            previousLinkClassName={'page-number'}
                            nextLinkClassName={'page-number'}
                            activeLinkClassName={'active'}
                        />
                        {windowProduct && (
                            <Window
                                removeFromCart={removeFromOrder}
                                onClickClosedWindow={() => setWindowProduct(false)}
                                product={windowItems}
                                openCart={openCart}
                                onClickClosed={() => setWindowProduct(false)}
                            />
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </animated.div>
    );
};
