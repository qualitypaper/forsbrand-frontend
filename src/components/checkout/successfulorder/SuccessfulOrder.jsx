import React from 'react'
import "./SuccesfulOrder.scss"
import logo from "../../../assets/images/check.png";
import {useNavigate} from "react-router-dom";

 const SuccessfulOrder = () => {
     const  navigate = useNavigate()
     const onClickOnButton = () => {
         navigate("/")
     }
    return (
        <div className="succesful__order">
            <div className="succesful-images">
                <img src={logo} alt="" />
            </div>
            <div className="succesful__order-text">
                <h1>
                    МИ РАДІ СПОВІСТИТИ ВАМ, ЩО ВАШ ЗАМОВЛЕННЯ УСПІШНО ОФОРМЛЕНО!</h1>
                <p>ВАШ ВИБІР – ЦЕ ВАЖЛИВИЙ КРОК, І МИ ГОТОВІ НАДАТИ ВАМ ВИДАЮЧЕ ОБСЛУГОВУВАННЯ.</p>
                <button className="succesful__order__button">
                    <p onClick={onClickOnButton}>ПЕРЕЙТИ НА ГОЛОВНУ</p>
                </button>
            </div>

        </div>
    )
}

export default SuccessfulOrder
