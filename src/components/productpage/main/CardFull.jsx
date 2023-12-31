import React, { useContext, useState } from "react";
import arrow_down from "../../../assets/images/arrow_down.svg";
import arrow_top from "../../../assets/images/arrow_top.svg";
import "./CardFull.scss";
import { Header } from "../header";
import { AppContext } from "../../app/App";
import {currencyValue, SIZES} from "../../../assets/constant";

import { useNavigate } from "react-router-dom";

function CardFull({ product, onClickAddToCart, openCart }) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const { currentClothing } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [arrowChange, setArrowChange] = useState(false)
  const [arrowChangeSeeSizes, setArrowChangeSeeSizes] = useState(false)
  const [openSeeSized, setOpenSeeSizes] = useState(false);
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);
  const { addToOrder, setWindowProduct } = useContext(AppContext);


  const { images, name, originalPrice, sizes, currentPrice, description } =
    currentClothing;
  if (!images || !sizes) return;
  const list = SIZES;
  const textList = list[selected];

  // const validateQuantity = (value) => {
  //     return sizes[open] < value
  // }

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
    setSelectedButton(index);
  };

  const ChangeImgButton = () => {
    setArrowChange(!arrowChange)
  }
  const isButtonSelected = (index) => {
    return selectedButton === index;
  };

  const onClickSorting = (i) => {
    setSelected(i);
    setOpen(false);
  };
  const handleAddToCart = () => {
    setButtonClicked(true);
    if (!textList) {
      // If no size is selected, handle accordingly (display an error, for example)
      console.error("Please select a size before adding to cart");
      return;
    }

    const temp = {
      ...currentClothing,
      size: textList,
      quantity: Number.parseInt(quantity),
    };

    addToOrder(temp);
    navigate("/");
    openCart();
    setWindowProduct(false);
  };
  const clickOpenSeeSized = () => {
    setOpenSeeSizes(!openSeeSized);
    setArrowChangeSeeSizes(!arrowChangeSeeSizes)
  };

  const getSizesImage = () => {
    if (currentClothing.group) {
      return currentClothing.group.sizesImage;
    }
  };

  const constructPrice = () => {
    if (currentPrice !== originalPrice) {
      return (
        <>
          <span className="original_price">
            {originalPrice + currencyValue}
          </span>
          <span>{currentPrice + currencyValue}</span>
        </>
      );
    } else {
      return <span>{originalPrice + currencyValue}</span>;
    }
  };

  const handleQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const processDescription = () => {
    if (description) {
      return String(description).replaceAll("\n", "</br>");
    } else return "";
  };

  return (
    <div className="card__full">
      <Header text={name} id={currentImageIndex} />
      <div className="card__full-all">
        <div className="window__left-page ">
          <img
            className="window__left-page-img"
            src={images[currentImageIndex]}
            alt=""
          />
          <div className="switch_cardfull">
            {images &&
              images.map((image, index) => (
                <button
                  key={index}
                  className={
                    isButtonSelected(index)
                      ? "input_circle selected"
                      : "input_circle"
                  }
                  onClick={() => handleImageChange(index)}
                >
                  <img width={40} height={40} src={image} alt="" />
                </button>
              ))}
          </div>
          <div className="window__left-text">
            <div dangerouslySetInnerHTML={{__html: processDescription()}}/>
          </div>
        </div>
        <div className=" main-product d-flex flex-column ">
        <div className="product__page-text">
          <p>{name}</p>
          <p>{constructPrice()}</p>
        </div>
        <div className="product__page">
          <div className="product__page-size">
            <div onClick={ChangeImgButton} >
              <p  className="opacity-8">Sizes</p>
            <button
              className="product__page-size-btn"
              onClick={() => setOpen(!open)}
            >
              <p>{textList}</p>
              <img src={arrowChange ? arrow_top : arrow_down} alt="" />
            </button>
            </div>
            {buttonClicked && !textList && (
            <p className="select_size">Виберіть розмір</p>
            )}
            {open && (
              <div className="product__page-size-open">
                {list.map((sort, index) => (
                  <li key={index} onClick={() => onClickSorting(index)}>
                    {sort}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
          <div className="main_quantity">
          <p  className="opacity-8">Кількість</p>
          <input
            onChange={handleQuantityChange}
            className="input_quantity"
            type="number"
            min={1}
            max={sizes[open] || 100}
          />
          </div>
          <button onClick={handleAddToCart} className="product__page-btn cu-p">
            <p>Додати до кошика</p>
          </button>
        </div>
        <div></div>
      </div>
      <div  onClick={clickOpenSeeSized} className="see_sizes">
        <button
            className="see_sizes-btn"
            onClick={() => setOpenSeeSizes(!openSeeSized)}
        >
        <p  className="see_sizes-text"> Посмотреть размеры </p>
          <img className="see_sizes-img" width={30} height={30} src={arrowChangeSeeSizes ? arrow_top : arrow_down} alt="" />
        </button>
      </div>
        {openSeeSized && (
          <div className="see_sizes-images">
            <img src={getSizesImage()} />
          </div>
        )}
    </div>
  );
}

export default CardFull;
