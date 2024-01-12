import React, { useContext, useState } from 'react'
import "./CardFullRight.scss"
import SomeComponent, { SIZES } from "../../../../assets/constant";
import CardFullRightSizes from "./sizes/CardFullRightSizes";
import CardFullRightQuantity from "./quantity/CardFullRightQuantity";
import { AppContext } from "../../../app/App";

const CardFullRight = () => {
    const [quantity, setQuantity] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [addButonDisabled, setAddButtonDisabled] = useState(false);
    const { addToOrder, setWindowProduct, currentClothing, setCartOpened } = useContext(AppContext);

    const openCart = () => {
        setCartOpened(true);
    };

    const { name } = currentClothing;


    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        setButtonClicked(true);
        if (selected === -1) {
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
    const CardFullRightText = ({ name }) => {
        return (
            <div className="product__page-text">
                <p>{name}</p>
                <p><SomeComponent currentClothing={currentClothing} /></p>
            </div>
        )

    }
    const CardFullRightButton = ({ AddToCart,disabled }) => {
        return (
            <button onClick={handleAddToCart} disabled={disabled} className="product__page-btn cu-p mb-20">
                <p>{AddToCart}</p>
            </button>
        )

    }

    const handleSizesChange = (e) => {
        setAddButtonDisabled(true);
        setSelected(e);
        setTimeout(() => {
            setAddButtonDisabled(false);
        }, 700);
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
                    setSelected={handleSizesChange}
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
                disabled={addButonDisabled}
                AddToCart="Додати до кошика"
            />
        </div>
    );
};

export default CardFullRight;
