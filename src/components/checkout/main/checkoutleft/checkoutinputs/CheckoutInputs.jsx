import React, {useContext} from 'react'
import CheckoutInput from "../detailsform/CustomerDetailsForm";
import {AppContext} from "../../../../app/App";
import "./CheckoutInputs.scss"

const CheckoutInputs = ({handleChange}) => {
    const {
        showData,
        setShowData,
        inputData,
        setInputData,
        setDeliveryOpenMethod,
        setDeliveryMethod,
    } = useContext(AppContext);
    const [showError, setShowError] = React.useState(false)
    const [ showNext, setShowNext] = React.useState(true)
    const [formData, setFormData] = React.useState({
        email: '',
        fisrtName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        postalCode: '',
        region: '',
        description: '',
    });


    const inputFields = [
        {label: 'Ел. пошта для підтвердження замовлення*', id: 'email', type: 'text'},
        {label: 'Ім’я*', id: 'firstName', type: 'text'},
        {label: 'Прізвище*', id: 'lastName', type: 'text'},
        {label: 'Телефон*', id: 'phoneNumber', type: 'tel'},
        {label: 'Країна*', id: 'country', type: 'text'},
        {label: 'Місто*', id: 'city', type: 'text'},
        {label: 'Регион', id: 'region', type: 'text'},
        {label: 'Поштовий індекс*', id: 'postalCode', type: 'text'},
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

    const handleInputChange = (event, fieldName) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        handleChange(id, value);
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
                showNext && setDeliveryOpenMethod(true);
            } else {
                // Trigger HTML5 validation manually
                form.reportValidity();
            }
        };

    const handleButtonClick2 = () => {
        setInputData(true)
        setShowData(false);
        setDeliveryOpenMethod(false)
        setShowNext(false)
    };

    return (
        <>
            {showData &&
                <div className="checkout-left-show">
                    <div className="checkout-left-show-text">
                        <p>Деталі клієнта й доставки:</p>
                        <p onClick={handleButtonClick2} className="cu-p">Змінити</p>
                    </div>
                    <p className="checkout-open-text"> {formData.name} {formData.lastName} </p>
                    <p className="checkout-open-text"> {formData.email}</p>
                    <p className="checkout-open-text"> {formData.phoneNumber}</p>
                    <p className="checkout-open-text"> {formData.country}, {formData.city}</p>
                    <p className="checkout-open-text"> {formData.address} {formData.postalCode}</p>
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
                            onChange={(e) => handleInputChange(e, field.id)}
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
