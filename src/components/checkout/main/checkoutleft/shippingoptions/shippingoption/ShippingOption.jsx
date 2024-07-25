import React from 'react';
import CheckoutInput from "../../detailsform/CustomerDetailsForm";
import "./ShippingOption.scss"
import { AutoComplete, Input } from 'antd';

const ShippingOption = ({
    selectedOption,
    onChange,
    label,
    name,
    id,
    showErrorAddress,
    showErrorDepartmentNumber,
    addressValue,
    departmentValue,
    handleInputChange,
    handleInputChange2,
    departments
}) => {
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
                        <div className="radio-subtext" key={id}>
                            <p>{selectedOption.description}</p>
                            {selectedOption.requiredFieldsList.map((field) => (
                                field === "ADDRESS_INPUT" ? <CheckoutInput labelClassName="mt-10" label={<b
                                    className="delivery-inputs">Адреса</b>} showError={showErrorAddress} required
                                    key={field} value={addressValue}
                                    onChange={handleInputChange} type="text"
                                    placeholder="Адреса" /> : (

                                    <div className='' key={label}>
                                        <label htmlFor="dep" className="mt-10 ml-5">
                                            <b className='delivery-inputs'>Вiддiлення</b>
                                        </label>
                                        <AutoComplete id="dep" className="mt-5"
                                            style={{ width: "100%", marginTop: "10px", backgroundColor: "white", borderRadius: "1px solid black" }}
                                            options={departments} onChange={(e) => handleInputChange2(e)} value={departmentValue}>
                                            <Input value={departmentValue} defaultValue={departmentValue} type="text"
                                                placeholder="Вiддiлення" className="d-block inpt" />
                                        </AutoComplete>
                                        {showErrorDepartmentNumber && !departmentValue && <p className="error-message" style={{marginTop: "20px"}}>Веддіть Вiддiлення</p>}
                                    </div>
                                )
                            ))}
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
};

export default ShippingOption;