import React, {useContext, useEffect} from 'react'
import {Footer} from "../components/mainpage/footer";
import "./ProductPage.scss"
// import {ProductJson} from '../assets/clothes.js';
import {AppContext} from "../components/app/App";
import {useParams} from 'react-router-dom';
import Drawer from "../components/mainpage/drawer";
import CardFull from "../components/productpage/main/CardFull";
import CardFullSeeBox from "../components/productpage/seebox/CardFullSeeBox";
import {animated, useSpring} from "react-spring";
import {BASE_URL} from '../assets/constant';
import axios from 'axios';

export const ProductPage = () => {
    const {
        setCurrentClothing,
        setCartItems,
        windowItems,
        setWindowProduct,
        setCartOpened,
        cartItems,
        cartOpened,
        removeFromOrder,
        imagesBoxOpened,
    } = useContext(AppContext);


    const {id} = useParams();
    const addToCartFromWindow = (item) => {
        addToOrder(item);
        setWindowProduct(false);
    };
    const addToOrder = (item) => {
        const temp = cartItems.find(e => e.id === item.id)
        if (temp) {
            temp.quantity += 1
            setCartItems(cartItems.filter(e => e.id === item.id ? {...e, quantity: e.quantity + 1} : e))
        } else {
            const tempItems = [...cartItems]
            tempItems.push(item)
            setCartItems(tempItems)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // const res = {data: ProductJson.find(item => item.id === Number.parseInt(id))}
            const res = await axios.get(`${BASE_URL}/product/get/${id}`)
            if (res.data) {
                console.log(res.data)
                setCurrentClothing(res.data)
            }
        }

        fetchData()
    }, [id, setCurrentClothing]);
    const deleteToOrder = (element) => {
        const temp = cartItems.filter(item => item.id !== element.id || item.size !== element.size)
        setCartItems(temp)
        if (temp.length === 0) {
            localStorage.setItem('cart', null);
        } else {
            localStorage.setItem('cart', temp);
        }
    };

    const productAnimation = useSpring({
        to: {
            opacity: 1,
        },

        from: {
            opacity: 0,
        },
        config: {
            mass: 1,
            tension: 150,
            friction: 14,
        },
    });

    return (
        <>
            <div className="mid">
                <div className="mid_background1">
                    <div className="one">
                        <animated.div style={productAnimation}>
                            <CardFull
                                onAdd={addToOrder}
                                product={windowItems}
                                onClickAddToCart={addToCartFromWindow}
                            />
                        </animated.div>
                            {cartOpened && (
                                <Drawer
                                    deleteToOrder={deleteToOrder}
                                    items={cartItems}
                                    removeFromCart={removeFromOrder}
                                    onClickClosed={() => setCartOpened(false)}
                                />
                            )}
                        {imagesBoxOpened && <CardFullSeeBox />}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};