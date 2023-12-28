import React from 'react'

const CheckoutInput = ({ label, id, type, value, onChange, ...otherProps }) => (
    <div className="checkout-left__input">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} required {...otherProps}/>
    </div>
);

export default CheckoutInput;