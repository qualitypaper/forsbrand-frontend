import React, {useContext, useState} from "react";
import "./drawer.scss";
import arrow_right from "../../../assets/images/arrow_right.svg";
import logo_img from "../../../assets/images/logo_img.PNG";
import cross from "../../../assets/images/cross_mark.svg";
import {Link} from "react-router-dom";
import QuantityInput from "../QuantityInput";
import {AppContext} from "../../app/App";
import SomeComponent from "../../../assets/constant";


function Drawer({ onClickClosed, deleteToOrder, removeFromCart }) {
  const [hoveredItemId, setHoveredItemId] = useState({});
  const { cartItems, totalCost, handleQuantityChange } = useContext(AppContext);
  const [drawerActive, setDrawerActive] = useState(false);

  const openDrawer = () => {
    setDrawerActive(true);
  };

  const closeDrawer = () => {
    setDrawerActive(false);
  };
  console.log("cartItems", cartItems);
  
  return (
      <div>
        <div className={`overlay ${drawerActive ? 'active' : ''}`} onClick={closeDrawer}>
          <div className={`drawer ${drawerActive ? 'active' : ''}`} onClick={openDrawer}>
            <div className="header_drawer">
              <img
                  onClick={onClickClosed}
                  className="remove-btn cu-p"
                  src={arrow_right}
                  width={30}
                  height={30}
                  alt="Remove"
              />
              <div className="header_drawer-main">
                <h2 className="header_text fz-18 text-uppercase">Кошик</h2>
              </div>
            </div>
            {cartItems.length > 0 ? (
                <div className="cartItems-mains">
                  <div className="cartItems-main">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredItemId(item)}
                            onMouseLeave={() => setHoveredItemId({})}
                            className="cartItem"
                        >
                          <img className="img_cartItem" src={item.images[0]} alt="" />
                          <div className="cart_item">
                            <p className="text">{item.name}</p>
                            <div className="sizePlusPrice">
                              <b className="sizePlusPrice-Price"><SomeComponent currentClothing={item}
                              /></b>
                              <p className="sizePlusPrice-Size">Розмір: {item.size}</p>
                            </div>
                            <QuantityInput
                                removeFromCart={removeFromCart}
                                setQuantity={(quantity) =>
                                    handleQuantityChange(item, quantity)
                                }
                                item={item}
                                key={item.id}
                                value={item.quantity}
                            />
                          </div>
                          {hoveredItemId.id === item.id &&
                              hoveredItemId.size === item.size && (
                                  <img
                                      onClick={() => deleteToOrder(item)}
                                      className="cartItems-img"
                                      src={cross}
                                      alt="Remove"
                                  />
                              )}
                        </div>
                    ))}
                  </div>
                  <div className="items">
                    <div className="cartTotalBlock">
                      <ul>
                        <li>
                          <span>Разом:</span>
                          <b>{totalCost} ₴</b>
                        </li>
                      </ul>
                    </div>
                    <div className="button_order">
                      <Link to="/cart-page">
                        <button className="Btn cu-p">Продовжити</button>
                      </Link>
                    </div>
                  </div>
                </div>
            ) : (
                <div className=" m-10 cartEmpty d-flex align-center justify-center flex-column flex">
                  <img
                      className=""
                      width="240"
                      height="240"
                      src={logo_img}
                      alt="Empty"
                  />
                  <h2>Нічого немає</h2>
                  <p className="opacity-6 ">Додайте хочаб одну річ</p>
                  <button onClick={onClickClosed} className="Btn">
                    <img
                        className="Arrow2"
                        width={20}
                        height={20}
                        src={arrow_right}
                        alt="Arrow"
                    />
                    Повернутися назад
                  </button>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default Drawer;