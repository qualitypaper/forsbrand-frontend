import React, {useContext, useEffect, useState} from "react";
import "./Window.scss";
import cross from "../../../assets/images/cross_mark.svg";
import {Link} from "react-router-dom";
import {AppContext} from "../../app/App";
import SomeComponent from "../../../assets/constant";
import arrow_down_background from "../../../assets/images/minus.svg";
import arrow_top_background from "../../../assets/images/plus.svg";
import {ConfigProvider, Select, Spin} from 'antd';
import {LoadingOutlined} from "@ant-design/icons";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Window({openCart, onClickClosedWindow}) {
    const {
        currentImageIndex,
        setCurrentImageIndex,
        selected,
        setSelected,
        idActiveCircle,
        selectedButton,
        setSelectedButton,
        setIdActiveCircle,
        windowItems: windowItem,
        setOpen,
        setWindowProduct,
        cartItems,
        addToOrder,
        loading,
        setLoading,
    } = useContext(AppContext);
    const [selectSize, setSelectSize] = useState(true);
    const [addButtonDisabled, setAddButtonDisabled] = useState(false);

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

    useEffect(() => {
        setSelected(currentImageIndex[idActiveCircle]);
    }, [currentImageIndex, idActiveCircle, setSelected]);

    const onClickSorting = (i) => {
        setAddButtonDisabled(true);
        setSelected(i.size);
        setOpen(false);
        setTimeout(() => {
            setAddButtonDisabled(false);
        }, 1000)

    };


    const handleAddToCart = () => {
        if (!selected) {
            setSelectSize(false);
            return;
        }

        setSelectSize(true);

        setLoading(true);

        const productToAdd = {
            ...windowItem,
            quantity: quantity,
            size: selected,
        };


        setTimeout(() => {
            addToOrder(productToAdd);
            openCart();
            setWindowProduct(false);
            setLoading(false);
        }, 1000);
        setSelectSize(false);
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
                        <img className="cross-window" width={20} height={20} src={cross} alt=""/>
                    </div>
                    <div className="windowAll">
                        <div className="window__left ">
                            <Link to={`/product-page/${windowItem.id}`}>
                                <img
                                    className="window__left-img"
                                    src={windowItem.images[currentImageIndex]}
                                    loading="lazy"
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
                                <p><SomeComponent currentClothing={windowItem}/></p>
                            </div>
                            <div className="window__right-size">
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Select: {
                                                colorPrimary: '#eb2f96',
                                                borderRadius: '0',
                                                colorBgContainer: '#ffffff',
                                                optionSelectedBg: '#ffffff',
                                                borderRadiusXS: '0',
                                                borderRadiusLG: '0',
                                                borderRadiusSM: '0',
                                                colorBorderHover: '#ffffff'
                                            },
                                            Alert: {
                                                colorPrimary: '#eb2f96',
                                                borderRadius: '0',
                                                colorBgContainer: '#ffffff',
                                                optionSelectedBg: '#ffffff',
                                                borderRadiusXS: '0',
                                                borderRadiusLG: '0',
                                                borderRadiusSM: '0',
                                                colorBorderHover: '#ffffff'
                                            }

                                        },
                                    }}
                                >
                                    <p>Розмір</p>
                                    <Select
                                        placeholder="Виберіть розмір"
                                        className="select"
                                        optionFilterProp="children"
                                        value={selected && selected}
                                        filterOption={(button, option) => (option?.label ?? '').includes(button)}
                                        options={windowItem.sizes.map((size, index) => ({
                                            value: size.size,
                                            label: (
                                                <li key={size.id} onClick={() => onClickSorting(size)}>
                                                    {size.size}
                                                </li>
                                            ),
                                        }))}
                                    />
                                    {!selectSize && !selected &&(
                                        <p className="select_sizeWindow"><Stack sx={{width: '100%'}} spacing={1}>
                                            <Alert severity="error">Виберіть розмір</Alert>
                                        </Stack>
                                        </p>
                                    )}
                                </ConfigProvider>
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
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Spin: {
                                            colorPrimary: '#7c7c7c'
                                        },
                                    },
                                }}
                            >
                                <button
                                    onClick={handleAddToCart}
                                    disabled={addButtonDisabled}
                                    className="window__right-btn cu-p"
                                >
                                    <p>{loading ? (
                                        <Spin
                                            indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}
                                        />
                                    ) : (
                                        <p>Додати до кошика</p>
                                    )}</p>
                                </button>
                            </ConfigProvider>
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
