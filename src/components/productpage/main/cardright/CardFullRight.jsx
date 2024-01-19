import React, {useContext, useState} from 'react'
import "./CardFullRight.scss"
import SomeComponent from "../../../../assets/constant";
import CardFullRightSizes from "./sizes/CardFullRightSizes";
import CardFullRightQuantity from "./quantity/CardFullRightQuantity";
import {AppContext} from "../../../app/App";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const CardFullRight = () => {
    const [quantity, setQuantity] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [selected, setSelected] = useState();
    const [addButonDisabled, setAddButtonDisabled] = useState(false);
    const {addToOrder, setWindowProduct, currentClothing, setCartOpened, setLoading} = useContext(AppContext);

    const openCart = () => {
        setCartOpened(true);
    };

    const {name} = currentClothing;


    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        setButtonClicked(true);

        if (!selected) {
            setButtonClicked(true);
            console.error("Please select a size before adding to cart");
            return;
        }
        setLoading(true);


        const temp = {
            ...currentClothing,
            size: currentClothing.sizes[selected],
            quantity: Number.parseInt(quantity),
        };

        addToOrder(temp);
        setTimeout(() => {
            addToOrder(temp);
            openCart();
            setWindowProduct(false);
            setLoading(false);
        }, 1000);
        setWindowProduct(false);
    };

    const CardFullRightText = ({name}) => {
        return (
            <div className="product__page-text">
                <p>{name}</p>
                <p><SomeComponent currentClothing={currentClothing}/></p>
            </div>
        )

    }
    const CardFullRightButton = ({AddToCart, disabled}) => {
        const {
                loading,
        } = useContext(AppContext)
        return (
            <button onClick={handleAddToCart} disabled={disabled} className="product__page-btn cu-p mb-20">
                <p>{loading ? (
                    <Spin
                        indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}
                    />
                ) : (
                    <p>{AddToCart}</p>
                )}</p>
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
                    sizes={currentClothing.sizes}
                    buttonClicked={buttonClicked}
                    selected={selected}
                    setSelected={handleSizesChange}
                    chosenSize="Виберіть розмір"
                />
            </div>
            <CardFullRightQuantity
                handleQuantityChange={handleQuantityChange}
                sizes={currentClothing.sizes}
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
