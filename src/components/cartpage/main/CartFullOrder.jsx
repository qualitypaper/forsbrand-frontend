import React from "react";
import "./CartFullOrder.scss";
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
