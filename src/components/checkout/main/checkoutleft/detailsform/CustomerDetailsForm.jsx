import React from 'react'
import "./CustomerDetailsForm.scss"

const CheckoutInput = ({ label, id, type, labelClassName, value,showError, onChange,required, ...otherProps }) => (
    <div className="checkout-left__input">
        <label htmlFor={id} className={labelClassName ? labelClassName : ''}>{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} required {...otherProps}/>
        {required && showError && !value && <p className="error-message">Веддіть {label}</p>}
    </div>
);

export default CheckoutInput;