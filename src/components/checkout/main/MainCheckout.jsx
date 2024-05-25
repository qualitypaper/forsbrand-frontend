import React, { useContext, useState } from "react";
import "./MainCheckout.scss";
import CheckoutRight from "./checkoutright/CheckoutRight";
import CheckoutLeft from "./checkoutleft/CheckoutLeft";
import axios from "axios";
import { BASE_URL } from "../../../assets/constant";
import { AppContext } from "../../app/App";
import { generateMerchantSignature } from "./checkoutleft/shippingoptions/ShippingOptions";

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
  const { cartItems, setPromocode } = useContext(AppContext);
  const [updateChanges, setUpdateChanges] = useState({});
  const [orderId, setOrderId] = useState();
  const [amountToPay, setAmountToPay] = useState(100000);
  const [merchantSignature, setMerchantSignature] = useState("");
  console.log("🚀 ~ MainCheckout ~ merchantSignature:", merchantSignature);

  const handleChange = async (key, value, firstKey = null) => {
    console.log("key: ", key, "value: ", value);
    if (key === "deliveryTypeId") {
      const temp = { ...updateChanges, deliveryTypeId: value };
      console.log(temp);
      setUpdateChanges(temp);
    }
    if (firstKey) {
      const temp = { ...updateChanges };
      temp[firstKey][key] = value;
      setUpdateChanges(temp);
    } else {
      setUpdateChanges({ ...updateChanges, [key]: value });
    }

    if (key === "promocode" && orderId) {
      const res = await axios.post(`${BASE_URL}/order/setPromo`, {
          orderId: orderId,
          promo: value
      });
      if(res.data) {
        setAmountToPay(res.data.price)
        setMerchantSignature(await generateMerchantSignature(orderId, res.data.price))
      }
    } else if (key === "description" && orderId) {
      await axios.post(`${BASE_URL}/order/setDescription`, {
          orderId: orderId,
          description: value,
      });
    }
  };

  const constructProducts = () => {
    const productArr = cartItems.map((product) => ({
      quantity: product.quantity,
      size: product.size,
      productId: product.id,
    }));
    return { ...updateChanges, products: productArr };
  };

  const submitOrder = async () => {
    const result = constructProducts();
    const res = await axios.post(`${BASE_URL}/order/create`, result);
    console.log(res.data);
    if (res.data) {
      /// send notification about the successful order creation
      setOrderId(Number.parseInt(res.data.id));
      setPromocode(res.data.promocodes);
      if (res.data.promocodes) {
        setAmountToPay(
          res.data.totalPrice -
            Math.ceil(
              (res.data.totalPrice * res.data.promocodes.discount) / 100
            )
        );
      } else {
        setAmountToPay(res.data.totalPrice);
      }
    }
    return res.data ? res.data : null;
  };

  console.log(updateChanges.products);

  return (
    <div className="checkout">
      <CheckoutLeft
        handleChange={handleChange}
        submitOrder={submitOrder}
        amountToPay={amountToPay}
        orderId={orderId}
        name={updateChanges.firstName + updateChanges.lastName}
        email={updateChanges.email}
        merchantSignature={merchantSignature}
        setMerchantSignature={setMerchantSignature}
      />
      <CheckoutRight handleChange={handleChange} />
    </div>
  );
};

export default MainCheckout;
