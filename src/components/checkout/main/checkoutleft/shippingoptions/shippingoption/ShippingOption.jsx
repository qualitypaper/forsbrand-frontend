import React from 'react';
import CheckoutInput from "../../detailsform/CustomerDetailsForm";
import "./ShippingOption.scss"

const ShippingOption = ({ selectedOption, onChange, label, name,  id, value, addressValue, departmentValue, handleInputChange, handleInputChange2}) => {
    return (
        <div>
            <div className="radio">
                <label>
                    <fieldset className="radio-button">
                        <input
                            className="core-radio-button"
                            id={id}
                            type='radio'
                            name={name}
                            checked={selectedOption.id === id}
                            onChange={onChange}
                        />
                        <div className="radio-button-text">
                            {label}
                        </div>
                    </fieldset>
                    {selectedOption.id === id && (
                        <div className="radio-subtext">
                            <p>{selectedOption.description}</p>
                            {selectedOption.requiredFieldsList.map((field) => (
                                field === "ADDRESS_INPUT" ? <CheckoutInput value={addressValue} onChange={handleInputChange}  type="text" placeholder="Address"/> :
                                    <CheckoutInput value={departmentValue} onChange={handleInputChange2}  type="text" placeholder="Department"/>
                                ))}
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
};

export default ShippingOption;