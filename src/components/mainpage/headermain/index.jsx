import React from 'react';
import logo_cart from "../../../assets/images/cart_logo.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import arrow_top from "../../../assets/images/arrow_top.svg";
import "./HeaderMain.scss";
import StyledBadge from '@mui/material/Badge';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const HeaderMain = ({ onClickCart, cartItemCount }) => {
  const list = ["UAH ₴"];
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const waluta = list[selected];

  const onClickSorting = (i) => {
    setSelected(i);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="containerHeader">
        <div className="header__main">
          <div onClick={onClickCart} className="header__main-cart cu-p">
          <IconButton aria-label="cart">
               <StyledBadge badgeContent={cartItemCount}   color="info"  style={{ transform: 'translateY(-5%)' }}>
            <ShoppingCartIcon />
          </StyledBadge>
                 </IconButton>

          </div>
          <div className="plant-shopping-right-sorting-popup">
            <ul>
              <button onClick={() => setOpen(!open)} className="header__main-btn">
                <p>{waluta}</p>
                <img onClick={() => setOpen(!open)} src={open ? arrow_top : arrow_down} alt="" />
              </button>
            </ul>
            {open && (
              <div className="popup">
                <ul>
                  {list.map((sort, index) => (
                    <li key={index} onClick={() => onClickSorting(index)} className={selected === index ? "active" : ""}>
                      {sort}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
