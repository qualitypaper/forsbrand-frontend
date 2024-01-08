import React from 'react'
import DeliveryComponent from "../components/delivery/DeliveryComponent";
import {Footer} from "../components/mainpage/footer";
import "./Delivery.scss"
import {Header} from "../components/productpage/header";

const Delivery = () => {
    return (
        <div className="mid">
            <div className="mid_background2">
                <div className="one1">
                    <Header maintext="Головна /" text="Delivery" />
            <DeliveryComponent />
        </div>
            </div>
            <Footer />
        </div>
    )
}
export default Delivery
