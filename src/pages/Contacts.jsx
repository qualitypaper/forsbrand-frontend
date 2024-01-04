import React from 'react'
import {Footer} from "../components/mainpage/footer";
import "./Delivery.scss"
import ContactsComponent from "../components/contacts/ContactsComponent";

const Contacts = () => {
    return (
        <div className="mid">
            <div className="mid_background2">
                <div className="one1">
                    <ContactsComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contacts
