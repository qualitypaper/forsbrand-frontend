import React from 'react';
import "./CardFullRightQuantity.scss"

const CardFullRightQuantity = ({ handleQuantityChange, sizes, open, quantityText }) => {
    return (
        <div className="main_quantity">
            <p className="opacity-8">{quantityText}</p>
            <input
                onChange={handleQuantityChange}
                className="input_quantity"
                type="number"
                min={1}
                max={sizes[open] || 100}
            />
        </div>
    );
};

export default CardFullRightQuantity;