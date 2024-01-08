import React, {useState} from 'react';
import {SIZES} from "../../../../../assets/constant";
import "./CardFullRightSizes.scss"
import {ConfigProvider, Select, Alert} from "antd";

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
                        borderRadius: '0',
                        colorBgContainer: '#ffffff',
                        optionSelectedBg: '#ffffff',
                        borderRadiusXS: '0',
                        borderRadiusLG: '0',
                        borderRadiusSM: '0',
                    },
                    Alert: {
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
                placeholder="Виберіть розмір"
                className="select"
                value={textList}
                optionFilterProp="children"
                filterOption={(button, option) => (option?.label ?? '').includes(button)}
                options={list.map((sort, index) => ({
                    value: sort,
                    label: (
                        <li key={index} onClick={() => onClickSorting(index)}>
                            <b>{sort}</b>
                        </li>
                    ),
                }))}
            />

            {buttonClicked && !textList && (
                <p className="select_size"><Alert message="Виберіть Розмір" type="error"
                showIcon/></p>
            )}
        </ConfigProvider>
        </div>
    );
};

export default CardFullRightSizes;