import React, {useState} from 'react';
import {SIZES} from "../../../../../assets/constant";
import CardFullRightSizesOpen from "../sizesopen/CardFullRightSizesOpen";
import "./CardFullRightSizes.scss"
import SizeSelectionButton from "../selectionbutton/SizeSelectionButton";

const CardFullRightSizes = ({ buttonClicked, selected, setSelected, chosenSize }) => {
    const [isOpen, setOpen] = useState(false);

    const list = SIZES;
    const textList = list[selected];

    const onClickSorting = (i) => {
        setSelected(i);
        setOpen(false);
    };

    return (
        <div className="product__page-size">
            <SizeSelectionButton
                textList={textList}
                setOpen={setOpen}
                open={isOpen}
            />
            <CardFullRightSizesOpen
                open={isOpen}
                list={list}
                onClickSorting={onClickSorting}
            />
            {buttonClicked && !textList && (
                <p className="select_size">{chosenSize}</p>
            )}
        </div>
    );
};

export default CardFullRightSizes;