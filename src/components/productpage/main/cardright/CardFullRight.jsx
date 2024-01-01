import React, {useContext, useState} from 'react'
import "./CardFullRight.scss"
import {constructPrice, SIZES} from "../../../../assets/constant";
import CardFullRightSizes from "./sizes/CardFullRightSizes";
import CardFullRightQuantity from "./quantity/CardFullRightQuantity";
import {AppContext} from "../../../app/App";

const CardFullRight = () => {
    const [quantity, setQuantity] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [selected, setSelected] = useState(false);
    const { addToOrder, setWindowProduct, currentClothing, setCartOpened } = useContext(AppContext);

    const openCart = () => {
        setCartOpened(true);
    };

    const { name } = currentClothing;

    const handleQuantityChange = (event) => {
        event.preventDefault();
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        setButtonClicked(true);
        if (selected === false) {
            console.error("Please select a size before adding to cart");
            return;
        }

        const temp = {
            ...currentClothing,
            size: SIZES[selected],
            quantity: Number.parseInt(quantity),
        };

        addToOrder(temp);
        openCart();
        setWindowProduct(false);
    };
    const CardFullRightText = ({name}) => {
        return(
            <div className="product__page-text">
                <p>{name}</p>
                <p>{constructPrice()}</p>
            </div>
        )

    }
    const CardFullRightButton = ({AddToCart}) => {
        return(
            <button onClick={handleAddToCart} className="product__page-btn cu-p">
                <p>{AddToCart}</p>
            </button>
        )

    }


    return (
        <div className="main-product">
            <CardFullRightText
                name={name}
            />
            <div className="product__page">
                <CardFullRightSizes
                    buttonClicked={buttonClicked}
                    selected={selected}
                    setSelected={setSelected}
                    chosenSize="Виберіть розмір"
                />
            </div>
            <CardFullRightQuantity
                handleQuantityChange={handleQuantityChange}
                sizes={SIZES}
                open={selected}
                quantityText="Кількість"
            />
            <CardFullRightButton
                AddToCart="Додати до кошика"
            />
        </div>
    );
};

export default CardFullRight;
