import React from 'react'
import "./UnsuccessfulOrder.scss"
import logo from "../../../assets/images/cross-order.png";
import {useNavigate} from "react-router-dom";

const UnsuccessfulOrder = () => {
    const navigate = useNavigate();

    const onClickOnButton = () => {
        navigate('/');
    };

    return (
        <div className="unsuccessful-order">
            <div className="unsuccessful-images">
                <img src={logo} alt="Логотип" />
            </div>
            <div className="unsuccessful-order-text">
                <h1>ВИБАЧТЕ, АЛЕ ЩОСЬ ПІШЛО НЕ ТАК З ОФОРМЛЕННЯМ ВАШОГО ЗАМОВЛЕННЯ.</h1>
                <p>Будь ласка, перевірте дані та спробуйте знову</p>
                <button className="unsuccessful-order-button" onClick={onClickOnButton}>
                    <p>ПЕРЕЙТИ НА ГОЛОВНУ</p>
                </button>
            </div>
        </div>
    );
};

export default UnsuccessfulOrder;