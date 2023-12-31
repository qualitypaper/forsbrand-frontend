import React from 'react'
import "./MainCheckout.scss"
import CheckoutRight from "./checkoutright/CheckoutRight";
import CheckoutLeft from "./checkoutleft/CheckoutLeft";
// [{
//     id: 0,
//     name: 'ДОСТАВКА ПО УКРАЇНІ (NOVA POST)',
//     description: 'Доставка по Україні здійснюється «новою поштою» від 1 до 3 діб. Вартість доставки зазвичай 50-100грн',
//     requiredInputFields: [
//         "ADDRESS_INPUT"
//     ]
// },
// {
//     id: 1,
//     name: 'ДОСТАВКА В КРАЇНИ ЄВРОПИ В КОТРИХ Є ВІДДІЛЕННЯ НОВОЇ ПОШТИ',
//     description: 'Доставка на відділення «нової пошти» в Європі коштує 400грн/10€, термін доставки зазвичай до 16 діб, але часто буває що відділення знаходиться дуже дале від вашого міста, і тоді вам потрібен наступний варіант доставки',
//     requiredInputFields: [
//         "ADDRESS_INPUT",
//         "DEPARTMENT_INPUT"
//     ]
// },
// {
//     id: 2,
//     name: 'АДРЕСНА ДОСТАВКА В КРАЇНИ ЄВРОПИ В КОТРИХ Є ВІДДІЛЕННЯ НОВОЇ ПОШТИ',
//     description: 'Тут все теж саме що і в минулому пункті, але посилка приходить саме під ваш дім (до 21 доби). Вартість 600грн/15€',
//     requiredInputFields: [
//         "DEPARTMENT_INPUT",
//     ]
// },
// {
//     id: 3,
//     name: 'ДОСТАВКА В БУДЬ-ЯКІ ІНШІ КРАЇНИ В КОТРИХ НЕМАЄ НОВОЇ ПОШТИ',
//     description: 'Така доставка здійснюється «укрпоштою» вартість такої доставки 1000грн/25€, термін доставки приблизно 14-21 діб',
//     requiredInputFields: [
//         "ADDRESS_INPUT"
//     ]
// },]
const MainCheckout = () => {
    return (
        <div className="checkout">
            <CheckoutLeft />
            <CheckoutRight />
        </div>
    )
}

export default MainCheckout