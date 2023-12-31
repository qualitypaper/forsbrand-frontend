import React, { useContext, useEffect, useState } from "react";
import sale from "../../../assets/images/sale.svg";
import cross from "../../../assets/images/cross_mark.svg";
import lock from "../../../assets/images/lock.svg";
import "./CartFullOrder.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../app/App";
import CartItem from "./cartitem/CartItem";
import CartFullOrderRight from "./cartfullright/CartFullOrderRight";
import CartFullOrderLeft from "./cartfullleft/CartFullOrderLeft";

const CartFullOrder = ({ deleteToOrder }) => {
  return (
    <div className="cart__order-full">
      <CartFullOrderRight deleteToOrder={deleteToOrder} />
      <CartFullOrderLeft />
    </div>
  );
};

export default CartFullOrder;
