import React, { useContext, useState } from 'react';
import { SIZES } from "../../../../../assets/constant";
import "./CardFullRightSizes.scss"
import { ConfigProvider, Select, Alert } from "antd";
import { AppContext } from '../../../../app/App';

const CardFullRightSizes = ({ buttonClicked, selected, setSelected, chosenSize }) => {
    const [isOpen, setOpen] = useState(false);
    const { currentClothing } = useContext(AppContext)

    const [textList, setTextList] = useState(SIZES[selected]);

    const onClickSorting = (i) => {
        setSelected(i);
        setTextList(SIZES[i]);
        setOpen(false);
    };
    const oneSizeChange = () => {
        setSelected(Math.random() + 1)
    }
    
    console.log(textList)

    const constructSizes = () => {
        
        if(currentClothing && currentClothing.group && currentClothing.group.oneSize) {
            return [{ value: "One Size", label: (<li key={Math.random()} onClick={() => oneSizeChange()}>One Size</li>)}]
        } else {
            return SIZES.map((sort, index) => ({
                value: sort,
                label: (
                    <li key={index} onClick={() => onClickSorting(index)}>
                        {sort}
                    </li>
                ),
            }))
        }
        
    }

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
                    options={constructSizes()}
                />

                {(currentClothing && currentClothing.group && !currentClothing.group.oneSize) && buttonClicked && !textList && (
                    <div className="select_size">
                        <Alert message="Виберіть Розмір" type="error" showIcon />
                    </div>
                )}
            </ConfigProvider>
        </div>
    );
};

export default CardFullRightSizes;