import React from 'react';
import "./CardFullRightSizesOpen.scss"

const CardFullRightSizesOpen = ({ open, list, onClickSorting }) => {
    return (
        <>
            {open && (
                <div className="product__page-size-open">
                    {list.map((sort, index) => (
                        <li key={index} onClick={() => onClickSorting(index)}>
                            {sort}
                        </li>
                    ))}
                </div>
            )}
        </>
    );
};

export default CardFullRightSizesOpen;