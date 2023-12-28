import React  from 'react';
import CardFull from './CardFull'; // Import your CartFullOrder component


const ProductMain = ({cardData, onAdd, product, onClickAddToCart, openCart}) => {
    return (
        <>
            <CardFull onAdd={onAdd} card={cardData} product={product} onClickAddToCart={onClickAddToCart} openCart={openCart}/>
        </>
    )
};

export default ProductMain;