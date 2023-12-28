import React, {useContext, useEffect} from 'react'
import {Footer} from "../components/mainpage/footer";
import "./ProductPage.scss"
import ProductMain from "../components/productpage/main";
import {ProductJson} from '../assets/clothes.js';
import {AppContext} from "../components/app/App";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../assets/constant';
export const ProductPage = () => {
    const {
        setCurrentClothing,
        setCartItems,
        windowItems,
        setWindowProduct,
        setCartOpened,
        cartItems
    } = useContext(AppContext);


    const { id } = useParams();
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

    const openCart = () => {
        setCartOpened(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = {data: ProductJson.find(item => item.id === Number.parseInt(id))}
            // const res = await axios.get(`${BASE_URL}/product/get/${id}`);
            if(res.data) {
                console.log(res.data)
                setCurrentClothing(res.data)
            }
        }

        fetchData()
    }, [id, setCurrentClothing]);

    return (
        <>
            <div className="mid">
                <div className="mid_background1">
                    <div className="one">
                        <ProductMain onAdd={addToOrder} product={windowItems} onClickAddToCart={addToCartFromWindow}
                                     openCart={openCart}/>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
