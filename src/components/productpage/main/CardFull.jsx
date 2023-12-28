import React, { useContext, useState } from "react";
import arrow_down from "../../../assets/images/arrow_down.svg";
import "./CardFull.scss";
import { Header } from "../header";
import { AppContext } from "../../app/App";
import { SIZES } from "../../../assets/constant";
import {useNavigate} from "react-router-dom";

function CardFull({ product, onClickAddToCart, openCart }) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const { currentClothing } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [openSeeSized, setOpenSeeSizes] = useState(false)
  const navigate = useNavigate();
  const {
    addToOrder,
    setWindowProduct,
  } = useContext(AppContext);

  const currencyValue = "₴";

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
  const isButtonSelected = (index) => {
    return selectedButton === index;
  };

  const onClickSorting = (i) => {
    setSelected(i);
    setOpen(false);
  };
  const handleAddToCart = () => {
    const temp = {...currentClothing, size: textList, quantity: Number.parseInt(quantity) }
    addToOrder(temp);
    navigate("/")
    openCart();
    setWindowProduct(false);
  };
  const clickOpenSeeSized = () => {
    setOpenSeeSizes(!openSeeSized)
  }

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
      return <span className="">{originalPrice + currencyValue}</span>;
    }
  };

  const handleQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value)
  }

  return (
    <div className="card__full">
      <Header text={name} id={currentImageIndex} />
      <div className="card__full-all">
        <div className="window__left-page m-25">
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
            <p>{description || ""}</p>
          </div>
          {/*<div className="">*/}
          {/*  Посмотреть размеры*/}
          {/*  <div>*/}
          {/*    <img src={getSizesImage()} width={200} height={200} />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="window__right">
          <div className="window__right-text">
            <p>{name}</p>
            <p>{constructPrice()}</p>
          </div>
          <div className="window__right-size">
            <button
              className="window__right-size-btn"
              onClick={() => setOpen(!open)}
            >
              <p>{textList}</p>
              <img src={arrow_down} alt="" />
            </button>
            {open && (
              <div className="window__right-size-open">
                {list.map((sort, index) => (
                  <li key={index} onClick={() => onClickSorting(index)}>
                    {sort}
                  </li>
                ))}
              </div>
            )}
          </div>
          <input onChange={handleQuantityChange} className="input_quantity" type="number" min={0} max={sizes[open] || 100} />
          <button onClick={handleAddToCart} className="window__right-btn cu-p">
            <p>Додати до кошика</p>
          </button>

        </div>
        <div>

      </div>
    </div>
      <div className="see_sizes">
      <p onClick={clickOpenSeeSized} className="see_sizes-text">Посмотреть размеры</p>
        {openSeeSized &&
        <div className="see_sizes-images">
          <img src={getSizesImage()} />
        </div>
        }
      </div>
    </div>
  );
}

export default CardFull;
