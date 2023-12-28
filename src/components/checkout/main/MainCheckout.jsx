import React, {useContext, useState} from 'react'
import "./MainCheckout.scss"
import {AppContext} from "../../app/App";
import sale from "../../../assets/images/sale.svg";
import ShippingOptions from "./ShippingOptions";
import list1 from "../../../assets/images/list.svg";
import CheckoutInput from "./CustomerDetailsForm";
import Payment from "./Payment";
import {Link} from "react-router-dom";


const MainCheckout = ({items}) => {
    const {
        openPromotionalCode,
        setOpenPromotionalCode,
        openNoteCode,
        setOpenNoteCode,
        cardData,
        cartItems,
        showData,
        setShowData,
        orderData,
        setOrderData,
        inputData,
        setInputData,
        deliveryOpenMethod,
        setDeliveryOpenMethod,
        deliveryMethod,
        setDeliveryMethod,
        selectedOption,
        setSelectedOption,
        totalCost,
        setShowPay,
        showPay,
        showPayOpen,
        setShowPayOpen,
        checkPromocode,

    } = useContext(AppContext);
    const card = cartItems;
    const [openNote, setOpenNote] = useState(false)
    const [promocode, setPromocode] = useState('');
    const [formData, setFormData] = React.useState({
        email: '',
        name: '',
        surname: '',
        phone: '',
        country: '',
        town: '',
        postcode: '',
        label: '',
        description: '',
    });
    const [inputValue, setInputValue] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');
    console.log('orderData state:', orderData);
    console.log(formData.description)
    const shippingOptions = [
        {
            id: 0,
            value: 'option1',
            name: 'ДОСТАВКА ПО УКРАЇНІ (NOVA POST)',
            description: 'Доставка по Україні здійснюється «новою поштою» від 1 до 3 діб. Вартість доставки зазвичай 50-100грн',
            requiredInputFields: [
                "ADDRESS_INPUT"
            ]
        },
        {
            id: 1,
            value: 'option2',
            name: 'ДОСТАВКА В КРАЇНИ ЄВРОПИ В КОТРИХ Є ВІДДІЛЕННЯ НОВОЇ ПОШТИ',
            description: 'Доставка на відділення «нової пошти» в Європі коштує 400грн/10€, термін доставки зазвичай до 16 діб, але часто буває що відділення знаходиться дуже дале від вашого міста, і тоді вам потрібен наступний варіант доставки',
            requiredInputFields: [
                "ADDRESS_INPUT",
                "DEPARTMENT_INPUT"
            ]
        },
        {
            id: 2,
            value: 'option3',
            name: 'АДРЕСНА ДОСТАВКА В КРАЇНИ ЄВРОПИ В КОТРИХ Є ВІДДІЛЕННЯ НОВОЇ ПОШТИ',
            description: 'Тут все теж саме що і в минулому пункті, але посилка приходить саме під ваш дім (до 21 доби). Вартість 600грн/15€',
            requiredInputFields: [
                "DEPARTMENT_INPUT",
            ]
        },
        {
            id: 3,
            value: 'option4',
            name: 'ДОСТАВКА В БУДЬ-ЯКІ ІНШІ КРАЇНИ В КОТРИХ НЕМАЄ НОВОЇ ПОШТИ',
            description: 'Така доставка здійснюється «укрпоштою» вартість такої доставки 1000грн/25€, термін доставки приблизно 14-21 діб',
            requiredInputFields: [
                "ADDRESS_INPUT"
            ]
        },
    ];

    const inputFields = [
        { label: 'Ел. пошта для підтвердження замовлення*', id: 'email', type: 'text' },
        { label: 'Ім’я*', id: 'name', type: 'text' },
        { label: 'Прізвище*', id: 'surname', type: 'text' },
        { label: 'Телефон*', id: 'phone', type: 'tel' },
        { label: 'Країна*', id: 'country', type: 'text' },
        { label: 'Місто*', id: 'town', type: 'text' },
        { label: 'Поштовий індекс*', id: 'postcode', type: 'text' },
    ];


    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleInputChange2 = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setDepartmentValue(event.target.value);
    };


    const handleButtonClick = () => {
        // const areAllFieldsFilled = inputFields.every((field) => formData[field.id]);
            setShowData(true);
            setInputData(false);
            setDeliveryMethod(false);
            setDeliveryOpenMethod(true);
    };

    const handleButtonClick2 = () => {
        setInputData(true)
        setShowData(false);
    };
    const handleButtonClick4 = () => {
        setOrderData(false);
        setDeliveryOpenMethod(true);
    };
    const handleButtonClick3 = () => {
        setOrderData(true);
        setDeliveryOpenMethod(false);
        setShowPay(false)
        setShowPayOpen(true)
    };
    const handleShippingOptionChange = (event) => {
        console.log(event)
        setSelectedOption(event);
    };

    const checkPromo = async (event) => {
        event.preventDefault();
        const res = await checkPromocode(promocode);
        if(res) {
            if(res.valid) {
                    // make a notification, that promocode is valid and the discount which user will get
            } else {
                // make a notification, that the promocode is not valid

            }
        }
    }

    return (
        <div className="checkout">
            <section className="checkout-left">
                {showData &&
                    <div className="checkout-left-show">
                        <div className="checkout-left-show-text">
                            <p>Деталі клієнта й доставки:</p>
                            <p onClick={handleButtonClick2} className="cu-p">Змінити</p>
                        </div>
                        <p className="checkout-open-text"> {formData.name} {formData.surname} </p>
                        <p className="checkout-open-text"> {formData.email}</p>
                        <p className="checkout-open-text"> {formData.phone}</p>
                        <p className="checkout-open-text"> {formData.country}, {formData.town}</p>
                        <p className="checkout-open-text"> {formData.address} {formData.postcode}</p>
                    </div>
                }
                {inputData &&
                    <div className="checkout-left__inputs">
                        <h2>Дані клієнта</h2>
                        {inputFields.map((field) => (
                            <CheckoutInput
                                key={field.id}
                                label={field.label}
                                id={field.id}
                                type={field.type}
                                value={formData[field.id]}
                                onChange={handleInputChange}
                            />
                        ))}
                        <button onClick={handleButtonClick} className="checkout-left__button"><p>Продовжити</p></button>
                    </div>
                }

                {orderData &&
                    <div className="checkout-left-show-order">
                    <div className="checkout-left-show-text">
                        <p>Спосіб доставки: </p>
                        <p onClick={handleButtonClick4} className="cu-p">Змінити</p>
                    </div>
                        <p className="checkout-open-text">{selectedOption.name} </p>
                        <div className="d-flex">
                            <p className="checkout-open-text mr-5">{inputValue}</p>
                            <p className="checkout-open-text">{departmentValue}</p>
                        </div>

                    </div>
                }
                {deliveryOpenMethod && (
                    <div className="checkout-options">
                        <div className="radio-delivery">
                            <p>Спосіб доставки:</p>
                        </div>
                        {shippingOptions.map((shipping) => (
                            <ShippingOptions
                                id={shipping.id}
                                value={shipping.value}
                                label={shipping.name}
                                selectedOption={selectedOption}
                                onChange={() => handleShippingOptionChange(shipping)}
                                handleInputChange={handleInputChange2}
                                handleInputChange2={handleInputChange3}
                            />
                        ))}
                        <button onClick={handleButtonClick3} className="checkout-left__shipping">
                            <p>Продовжити</p>
                        </button>
                    </div>
                )}
                {deliveryMethod &&
                <div className="checkout-left-delivery">
                    <p>Спосіб доставки</p>
                </div>
                }
                {showPayOpen &&
                    <div className="checkout-left-delivery2">
                   <Payment />
                    </div>
                }
                {showPay &&
                    <div className="checkout-left-payment">
                        <p>Оплата</p>
                    </div>
                }
                <div className="checkout-left-review">
                    <p>Перегляньте та розмістіть замовлення</p>
                </div>
            </section>
            <section className="checkout-right">
                <div className="checkout-right__order">
                    <div className="checkout-right__order-header">
                        <p className="checkout-right__order-header-data">Дані замовлення</p>
                        <Link to="/cart-page">
                            <p>Змінити кошик</p>
                        </Link>
                    </div>
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className="checkout-right__order-card">
                                <img width={70} height={70} src={item.images[0]} alt="" />
                                <div className="checkout-right__order-card-text">
                                    <li className="cart__order-full-price">
                                        <p>{item.name}</p>
                                        <p>{item.originalPrice}₴</p>
                                    </li>
                                    <p>К-сть: {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="checkout-right__order-promo">
                        <div className="checkout-right__order-promo-main">
                            <div className="checkout-right__order-promo-text">
                            <img width={20} height={20} src={sale} alt="Sale"/>
                            <p onClick={() => setOpenPromotionalCode(!openPromotionalCode)}>Введіть промокод</p>
                            </div>
                            {openPromotionalCode && (
                                <div className="checkout-right__order-promo-open">
                                    <input
                                        className="inp2"
                                        type="text"
                                        placeholder="Веддіть промокод"
                                    />
                                    <button onClick={checkPromo}>
                                        <p>Застосувати</p>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="checkout-right__list">
                            <div onClick={() => setOpenNote(!openNote)} className="cart__order-full-list2">
                                <img width={20} height={20} src={list1} alt="List 1"/>
                                <p>Додати примітку</p>
                            </div>
                        </div>
                            {openNote && (
                                <div className="cart__order-full-list2-open">
                            <textarea
                                className="inp2"
                                placeholder="Інструкції? Спеціальні запити? Додайте їх тут."
                                aria-invalid="false"

                            />
                                </div>)
                            }

                    </div>
                    <div>
                        <ul className="cart__order-full-delivery">
                            <li className="cart__order-full-price">
                                <p>Сумма</p>
                                <p>{totalCost}₴</p>
                            </li>
                            <li className="cart__order-full-price">
                                <p>Доставка</p>
                                <p>{cardData.originalPrice}₴</p>
                            </li>
                            <p></p>
                        </ul>
                    </div>
                    <div className="card__order-full-btn">
                        <div className="card__order-full-btn-text">
                            <p className="card__order-full-btn-text-main">Загалом</p>
                            <p>{card.originalPrice}₴</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainCheckout