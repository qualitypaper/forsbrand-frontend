import React, {useContext, useState} from 'react'
import {AppContext} from "../../../app/App";
import ShippingOption from "../ShippingOption";
import "./ShippingOptions.scss"

const ShippingOptions = () => {
    const {
        orderData,
        setOrderData,
        deliveryOpenMethod,
        setDeliveryOpenMethod,
        deliveryMethod,
        selectedOption,
        setSelectedOption,
        setShowPay,
        setShowPayOpen,

    } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [departmentValue, setDepartmentValue] = useState('');

    //
    // useEffect(() => {
    //     const fetchShippingOptions = async () => {
    //         const res = await axios.get(`${BASE_URL}/delivery-types/getAll`);
    //         if(res.data) {
    //             setShippingOptions(res.data)
    //         }
    //     }
    //
    //     fetchShippingOptions().then()
    // }, [])


    const handleInputChange2 = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setDepartmentValue(event.target.value);
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
    const handleShippingOptionChange = (option) => {
        console.log(option)
        setSelectedOption({})
        setInputValue('')
        setDepartmentValue('')
        setSelectedOption(option);
    };

    return (
        <>
            {orderData &&
                <div className="checkout-left-show-order">
                    <div className="checkout-left-show-text">
                        <p>Спосіб доставки: </p>
                        <p onClick={handleButtonClick4} className="cu-p">Змінити</p>
                    </div>
                    <p className="checkout-open-text">{selectedOption.name} </p>
                    <div className="d-flex">
                        {inputValue && <p className="checkout-open-text mr-5">Address: {inputValue}</p>}
                        {departmentValue && <p className="checkout-open-text">Department: {departmentValue}</p>}
                    </div>

                </div>
            }
            {deliveryOpenMethod && (
                <div className="checkout-options">
                    <div className="radio-delivery">
                        <p>Спосіб доставки:</p>
                    </div>
                    {shippingOptions.map((shipping) => (
                        <ShippingOption
                            id={shipping.id}
                            label={shipping.name}
                            selectedOption={selectedOption}
                            onChange={() => handleShippingOptionChange(shipping)}
                            addressValue={inputValue}
                            departmentValue={departmentValue}
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
        </>
    )
}
export default ShippingOptions
