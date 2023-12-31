import React, {useContext} from 'react'
import CheckoutInput from "../detailsform/CustomerDetailsForm";
import {AppContext} from "../../../../app/App";
import "./CheckoutInputs.scss"

const CheckoutInputs = () => {
    const {
        showData,
        setShowData,
        inputData,
        setInputData,
        setDeliveryOpenMethod,
        setDeliveryMethod,
    } = useContext(AppContext);
    const [showError, setShowError] = React.useState(false)
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


    const inputFields = [
        {label: 'Ел. пошта для підтвердження замовлення*', id: 'email', type: 'text'},
        {label: 'Ім’я*', id: 'name', type: 'text'},
        {label: 'Прізвище*', id: 'surname', type: 'text'},
        {label: 'Телефон*', id: 'phone', type: 'tel'},
        {label: 'Країна*', id: 'country', type: 'text'},
        {label: 'Місто*', id: 'town', type: 'text'},
        {label: 'Поштовий індекс*', id: 'postcode', type: 'text'},
    ];
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

    const handleInputChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleButtonClick = (event) => {
            event.preventDefault();

            const form = document.getElementById('formId');
            const areAllFieldsFilled = inputFields.every((field) => formData[field.id]);

            inputFields.forEach((field) => {
                const input = document.getElementById(field.id);
            });
            setShowError(true)
            if (areAllFieldsFilled) {

                setShowData(true);
                setInputData(false);
                setDeliveryMethod(false);
                setDeliveryOpenMethod(true);
            } else {
                // Trigger HTML5 validation manually
                form.reportValidity();
            }
        };

    const handleButtonClick2 = () => {
        setInputData(true)
        setShowData(false);
    };

    return (
        <>
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
                            required={true}
                            onChange={handleInputChange}
                            showError={showError}
                        />
                    ))}
                    <form  onClick={handleButtonClick} className="checkout-left__button" id="formId" noValidate>
                    <button><p>Продовжити</p></button>
                    </form>
                </div>
            }
        </>
    )
}
export default CheckoutInputs