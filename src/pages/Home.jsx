import React, {useContext, useEffect, useState} from 'react';
import {Footer} from '../components/mainpage/footer';
import {HeaderMain} from '../components/mainpage/headermain';
import {Main} from '../components/mainpage/main/Main';
import Drawer from '../components/mainpage/drawer';
import Window from '../components/mainpage/window';
import {AppContext} from "../components/app/App";
import "./Home.scss";
import {ProductJson} from "../assets/clothes";
import { BASE_URL } from '../assets/constant';
import PreLoader from "../components/preloader/PreLoader";
import { useSpring, animated } from 'react-spring';
import axios from 'axios';


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
    const logoAnimation = sessionStorage.getItem('logo') === undefined ? true : false;

    useEffect(() => {
        const getClothes = async () => {
            setLoading(true);
            const res = {data: ProductJson}
            // const res = await axios.get(`${BASE_URL}/product/getAll`)
            setCardData(res.data);
            setCurrentCardData(res.data); //
            setLoading(false);
        };
        getClothes()
    }, [])

    const deleteToOrder = (element) => {
        const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size)
        setCartItems(temp)
        if(temp.length === 0){
            localStorage.setItem('cart', null);
        } else {
            localStorage.setItem('cart', temp);
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

    const handlePageClick = (event) => {
        const newOffset = (event.selected * clothesPerPage) % cardData.length;
        setItemOffset(newOffset);
    };
    // const firstIndex = currentPage === 0 ? 0 : ((currentPage-1)*9) + 1
    // const currentClothes = ProductJson.slice(firstIndex, currentPage*2)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const homeAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });


    return (
        <animated.div style={homeAnimation}>
            {logoAnimation && <PreLoader />}
            <div className="mid">
                <div className="mid_background1">
                    <div className="one1">
                        <HeaderMain onClickCart={() => setCartOpened(true)} />
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
                <Footer />
            </div>
        </animated.div>
    );
};
