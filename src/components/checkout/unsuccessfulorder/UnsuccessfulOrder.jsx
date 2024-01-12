import React from 'react'
import "./UnsuccessfulOrder.scss"
import {useNavigate} from "react-router-dom";
import arrow from "../../../assets/images/arrow_right.svg";

const UnsuccessfulOrder = () => {
    const navigate = useNavigate();

    const onClickOnButton = () => {
        navigate('/');
    };

    return (
        <div className="unsuccessful-order">
            <div className="unsuccessful-order-content">
                <h1 className="unsuccessful-order-title">Оплата не  <h3 className="unsuccessful-order-title-down">пройшла
                </h3>
                    </h1>
                <div className="unsuccessful-order-button">
                    <button className="unsuccessful-order-button-item" onClick={onClickOnButton}>
                        <img src={arrow} alt=""/>
                        <p className="unsuccessful-order-button-text">
                            На головну
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnsuccessfulOrder;