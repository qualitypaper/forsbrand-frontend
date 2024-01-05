import React, { useState, useEffect, useContext } from "react";
import "./Window.scss";
import cross from "../../../assets/images/cross_mark.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import arrow_top from "../../../assets/images/arrow_top.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../../app/App";
import SomeComponent, {SIZES} from "../../../assets/constant";
import arrow_down_background from "../../../assets/images/minus.svg";
import arrow_top_background from "../../../assets/images/plus.svg";

function Window({ openCart, onClickClosedWindow }) {
  const {
    currentImageIndex,
    setCurrentImageIndex,
    selected,
    setSelected,
    idActiveCircle,
    selectedButton,
    setSelectedButton,
    setIdActiveCircle,
    open,
    windowItems: windowItem,
    setOpen,
    setWindowProduct,
    cartItems,
    addToOrder,
  } = useContext(AppContext);
const [selectSize, setSelectSize] = useState(false)

  useEffect(() => {
    const json = JSON.stringify(cartItems);
    localStorage.setItem("cart", json);
    console.log(json);
  }, [cartItems]);

  const [quantity, setQuantity] = useState(1);
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
    setSelectedButton(index);
    setIdActiveCircle(index);
  };
  const isButtonSelected = (index) => {
    return selectedButton === index;
  };
  // const sizes = ProductJson.reduce((acc, product) => {
  //     return {...acc, ...product.sizes}
  // }, {})
  const list = SIZES;
  useEffect(() => {
    setSelected(currentImageIndex[idActiveCircle]);
  }, [idActiveCircle]);

  const textList = list[selected];

  const onClickSorting = (i) => {
    setSelected(i);
    setOpen(false);
  };

  const handleAddToCart = () => {
    setSelectSize(true)
    if (!textList) return;

    const productToAdd = {
      ...windowItem,
      quantity: quantity,
      size: textList,
    };

    addToOrder(productToAdd);
    openCart();
    setWindowProduct(false);
    console.log(textList);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  //    const firstImages = product.images[0];
  // function QuantityInput({ value, onChange }) {
  //        const handleDecrease = () => {
  //            onChange(Math.max(value - 1, 1));
  //        };
  //
  //        const handleIncrease = () => {
  //            onChange(value + 1);
  //        };
  //        console.log(handleImageChange)
  //
  //        return (
  //            <div className="quantity-input">
  //                <button onClick={handleDecrease} disabled={value === 1}>
  //                </button>
  //                <div className="custom-input-container">
  //                    <input
  //                        className="inp"
  //                        type="number"
  //                        value={value}
  //                        onChange={(e) => onChange(parseInt(e.target.value) || 1)}
  //                    />
  //                    <p>{quantity}</p>
  //                    <div className='custom-input-container-img'>
  //                        <img  className="img_quantity1" disabled={quantity === 1} width={50}  height={50} src={arrow_top_background} alt=""/>
  //
  //                        <img onClick={handleIncrease} className="img_quantity" width={50}  height={50} src={arrow_down_background} alt=""/>
  //                    </div>
  //                </div>
  //                <button onClick={handleIncrease}></button>
  //            </div>
  //        );
  //    }
  return (
    <div>
      <div className="window">
        <div className="drawer1">
          <div className="cross-container" onClick={onClickClosedWindow}>
            <img className="cross" width={20} height={20} src={cross} alt="" />
          </div>
          <div className="windowAll">
            <div className="window__left ">
              <Link to={`/product-page/${windowItem.id}`}>
              <img
                className="window__left-img"
                src={windowItem.images[currentImageIndex]}
                alt=""
                width={500}
                height={500}
              />
              </Link>
              <div className="image-indicators">
                {windowItem.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={`image-indicator ${
                      currentImageIndex === index ? "active" : ""
                    }`}
                  />
                ))}
                <div className="circle">
                  <input
                    width={50}
                    height={50}
                    type="button"
                    className={
                      isButtonSelected(1) ? "input_circle" : "input_circle"
                    }
                    onClick={() => handleImageChange(1)}
                  />
                  <input
                    type="button"
                    className={
                      isButtonSelected(2) ? "input_circle" : "input_circle"
                    }
                    onClick={() => handleImageChange(2)}
                  />
                  <input
                    type="button"
                    className={
                      isButtonSelected(3) ? "input_circle" : "input_circle"
                    }
                    onClick={() => handleImageChange(3)}
                  />
                </div>
              </div>
            </div>

            <div className="window__right">
              <div className="window__right-text">
                <p>{windowItem.name}</p>
                <p><SomeComponent currentClothing={windowItem} /></p>
              </div>
              <div className="window__right-size">
                <p>Sizes</p>
                <button
                  className="window__right-size-btn cu-p"
                  onClick={() => setOpen(!open)}
                >
                  <p>{textList}</p>
                  <img
                    width="17"
                    height="17"
                    onClick={() => setOpen(!open)}
                    src={open ? arrow_top : arrow_down}
                    alt=""
                  />
                </button>
                {selectSize && !textList && (
                <p className="select_sizeWindow">Виберіть розмір</p>
                )}
                {open && (
                  <div className="window__right-size-open">
                    {list.map((sort, index) => (
                      <li
                        key={index}
                        onClick={() => onClickSorting(index)}
                        className={selected === index ? "active" : "color-red"}
                      >
                        {sort}
                      </li>
                    ))}
                  </div>
                )}
              </div>

              <div className="window__right-number">
                <p>Кількість</p>
                {/*<QuantityInput*/}
                {/*    removeFromCart={removeFromCart}*/}
                {/*    value={quantity}*/}
                {/*    setQuantity={setQuantity}*/}
                {/*/>*/}
                <div className="quantity-input">
                  <div className="custom-input-container">
                    <div className="custom-input-container-main">
                      <img
                        onClick={handleDecrease}
                        className="img_quantity cu-p"
                        src={arrow_down_background}
                        alt=""
                      />
                      <p className="pr-10 pl-10">{quantity}</p>
                      <img
                        onClick={handleIncrease}
                        className="img_quantity1 cu-p"
                        src={arrow_top_background}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="window__right-btn cu-p"
              >
                <p>Додати до кошика</p>
              </button>
              <Link to={`/product-page/${windowItem.id}`}>
                <p className="black_li">Подробиці</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Window;
