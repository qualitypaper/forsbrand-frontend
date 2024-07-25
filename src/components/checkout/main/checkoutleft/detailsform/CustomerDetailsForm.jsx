import React from 'react'
import "./CustomerDetailsForm.scss"
import { Input } from 'antd';

const CheckoutInput = ({ label, id, type, labelClassName, value,showError, onChange,required, placeholder, ...otherProps }) => (
    <div className="checkout-left__input">
        <label htmlFor={id} className={labelClassName ? labelClassName : ''}>{label}</label>
        <Input type={type} id={id} value={value} onChange={onChange} placeholder={placeholder || id} required {...otherProps} className='inp'/>
        {required && showError && !value && <p className="error-message">Веддіть {label}</p>}
    </div>
);

export default CheckoutInput;