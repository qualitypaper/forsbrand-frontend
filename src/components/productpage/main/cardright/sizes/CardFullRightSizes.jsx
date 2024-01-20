import React, {useContext, useState} from 'react';
import "./CardFullRightSizes.scss"
import {Alert, ConfigProvider, Select} from "antd";
import {AppContext} from '../../../../app/App';

const CardFullRightSizes = ({sizes,buttonClicked,  selected, setSelected}) => {
        const [open, setOpen] = useState(false);
        const {currentClothing} = useContext(AppContext)

        const [textList, setTextList] = useState();

        const onSizeChange = (i) => {
            setSelected(i);
            setTextList(sizes[i]);
            setOpen(false);
        };

        console.log(textList)

        const constructSizes = () => {
            if (!currentClothing.sizes) {
                return [];
            }
            return Object.keys(currentClothing.sizes).map((key, index) => ({
                value: key,
                label: (
                    <li key={index} onClick={() => onSizeChange(index)}>
                        {key}
                    </li>
                ),
            }));
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

                    {buttonClicked && (selected !== 0 && !selected) && (
                        <div className="select_size">
                            <Alert message="Виберіть Розмір" type="error" showIcon/>
                        </div>
                    )}
                </ConfigProvider>
            </div>
        );
    }
;

export default CardFullRightSizes;