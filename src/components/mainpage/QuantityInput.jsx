import React, {useContext} from "react";
import arrow_top_background from "../../assets/images/arrow_top_background.svg";
import arrow_down_background from "../../assets/images/arrow_down_background.svg";
import "./QuantityInput.scss"
import {AppContext} from "../app/App";

function QuantityInput({ removeFromCart, value, setQuantity, item }) {
    const {
        addToOrder,
        windowItems: windowItem,
    } = useContext(AppContext);

    const handleDecrease = () => {
        setQuantity(Math.max(value - 1, 1));
        if(item) {
            removeFromCart(item)
        } else {
            removeFromCart(windowItem);
        }
    };

    const handleIncrease = () => {
        if(item) {
            addToOrder(item)
        } else {
            addToOrder(windowItem);
        }

        setQuantity(value + 1);
    };

    return (
        <div className="quantity-input">
            <div className="custom-input-container">
                <div className="d-flex align-center pt-5">
                    <img
                        onClick={handleDecrease}
                        className="img_quantity cu-p"
                        width={10}
                        height={10}
                        src={arrow_down_background}
                        alt=""
                    />
                    <p className="pr-10 pl-10">{value}</p>
                    <img
                        onClick={handleIncrease}
                        className="img_quantity1 cu-p"
                        width={10}
                        height={10}
                        src={arrow_top_background}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default QuantityInput;