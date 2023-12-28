import React from 'react';
import logo_cart from "../../../assets/images/cart_logo.svg"
import arrow_down from "../../../assets/images/arrow_down.svg"
import arrow_top from "../../../assets/images/arrow_top.svg"
import "./HeaderMain.scss"

export const HeaderMain = ({onClickCart}) => {
    const list = ["UAH ₴"]
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)
    const waluta = list[selected]

    const onClickSorting = (i) => {
        setSelected(i)
        setOpen(false)
    }
    
    return (
        <header className="header">
            <div className="containerHeader">
                <div className="header__main">
                    <div onClick={onClickCart} className="header__main-cart cu-p">
                        <img src={logo_cart} width={20} height={30} alt="Cart Logo"/>
                        <p>Cart</p>
                    </div>
                    <div className="plant-shopping-right-sorting-popup">
                        <ul>
                                <button onClick={() => setOpen(!open)} className="header__main-btn">
                                    <p>{waluta}</p>
                                    <img onClick={() => setOpen(!open)} src={open ? arrow_top : arrow_down} alt=""/>
                                </button>
                        </ul>
                            {open && <div className="popup">
                                <ul>
                                    {list.map((sort, index) => (
                                        <li key={index} onClick={() => onClickSorting(index)}
                                            className={selected === index ? "active" : ""}>
                                            {sort}
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                    </div>
                </div>
            </div>
        </header>
    );
};