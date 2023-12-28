import React from 'react';
import CheckoutInput from "./CustomerDetailsForm";

const ShippingOptions = ({ selectedOption, onChange, label, name,  id, value, handleInputChange, handleInputChange2}) => {
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
                            value={value}
                            checked={selectedOption.value === value}
                            onChange={onChange}
                        />
                        <div className="radio-button-text">
                            {label}
                        </div>
                    </fieldset>
                    {selectedOption.value === value && (
                        <div className="radio-subtext">
                            <p>{selectedOption.description}</p>
                            {selectedOption.requiredInputFields.map((field) => (
                                field === "ADDRESS_INPUT" ? <CheckoutInput    onChange={handleInputChange}  type="text" placeholder="Address"/> :
                                    <CheckoutInput  onChange={handleInputChange2}  type="text" placeholder="Department"/>
                                ))}
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
};

export default ShippingOptions;