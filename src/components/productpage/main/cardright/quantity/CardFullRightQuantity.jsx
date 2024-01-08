import React from 'react';
import "./CardFullRightQuantity.scss"
import {InputNumber} from "antd";
import {ConfigProvider} from "antd/lib";

const CardFullRightQuantity = ({handleQuantityChange, quantityText}) => {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        InputNumber: {
                            colorPrimary: '#eb2f96',
                            borderRadius: '0',
                            colorBgContainer: '#ff0000'
                        }
                    },
                }}
            >
                <div className="main_quantity">
                    <p className="opacity-8">{quantityText}</p>
                    <InputNumber className="quantity-card" defaultValue={1} onChange={handleQuantityChange} min={1} max={100} />
                </div>
            </ConfigProvider>
        </>
    );
};

export default CardFullRightQuantity;