import React from 'react'
import "./ContactsComponent.scss"

const ContactsComponent = () => {
    return (
        <div className="ContactsComponent">
            <p>
               Наші контакти:<br/>
                <a href="mailto:forsbrandua@gmail.com">forsbrandua@gmail.com</a><br/>
            </p>
            <p className="ContactsComponent-p">
                <p>
                    Публічна інформація<br/>
                </p>
               <p>
                   Назва "Forsbrand" являється торговою маркою і захищена.
               </p>
            </p>
        </div>
    )
}
export default ContactsComponent
