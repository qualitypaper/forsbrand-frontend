import React from 'react'
import {Footer} from "../components/mainpage/footer";
import "./Delivery.scss"
import ContactsComponent from "../components/contacts/ContactsComponent";
import {Header} from "../components/productpage/header";

const Contacts = () => {
    return (
        <div className="mid">
            <div className="mid_background2">
                <div className="one1">
                    <Header maintext="Головна /" text="Contacts" />
                    <ContactsComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contacts
