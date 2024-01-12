import React, {useEffect} from 'react'
import "./SuccesfulOrder.scss"
import {useNavigate} from "react-router-dom";
import arrow from "../../../assets/images/arrow_right.svg";

const SuccessfulOrder = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('cart', []);
    }, []);

    const onClickOnButton = () => {
        navigate("/");
    };
    return (
        <div className="successful-order">
            <div className="successful-order-content">
                <h1 className="successful-order-title">Оплата пройшла
                    <h3 className="successful-order-title-down"> успішно
                    </h3></h1>
                <div className="successful-order-button">
                    <button className="successful-order-button-item" onClick={onClickOnButton}>
                        <img src={arrow} alt=""/>
                        <p className="successful-order-button-text">
                            На головну
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulOrder
