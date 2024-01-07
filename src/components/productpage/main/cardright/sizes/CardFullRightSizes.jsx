import React, {useState} from 'react';
import {SIZES} from "../../../../../assets/constant";
import "./CardFullRightSizes.scss"
import {ConfigProvider, Select} from "antd";

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
        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        colorPrimary: '#eb2f96',
                        borderRadius: '0',
                        colorBgContainer: '#ffffff',
                        optionSelectedBg: '#ffffff',
                        borderRadiusXS: '0',
                        borderRadiusLG: '0',
                        borderRadiusSM: '0',
                    }
                },
            }}
        >
            <p className="opacity-8">Sizes</p>
            <Select
                style={{
                    width: 170,

                }}
                allowClear
                placeholder="Виберіть розмір"
                className="select"
                optionFilterProp="children"
                filterOption={(button, option) => (option?.label ?? '').includes(button)}
                options={list.map((sort, index) => ({
                    value: sort,
                    label: (
                        <li key={index} onClick={() => onClickSorting(index)}>
                            {sort}
                        </li>
                    ),
                }))}
            />

            {buttonClicked && !textList && (
                <p className="select_size">{chosenSize}</p>
            )}
        </ConfigProvider>
        </div>
    );
};

export default CardFullRightSizes;