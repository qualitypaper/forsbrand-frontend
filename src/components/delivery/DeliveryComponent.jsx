import React from 'react'
import "./DeliveryComponent.scss"

const DeliveryComponent = () => {
    return (

        <div className="DeliveryComponent">
            <p>
                Доставка по Україні:<br/>
                Відбувається за допомогою компанії "Нова пошта".<br/>
            </ p>
            <p>
                Після обробки замовлення на вказану пошту (в замовленні) буде відправлено лист з трек-номером для
                відстеження замовлення.<br/>
            </p>
            <p>
                Відстежити замовлення можна за адресою:<br/>

                <a href="https://tracking.novaposhta.ua/#/uk">https://tracking.novaposhta.ua/#/uk</a>  <br/>

            </p>
        </div>
    )
}
export default DeliveryComponent
