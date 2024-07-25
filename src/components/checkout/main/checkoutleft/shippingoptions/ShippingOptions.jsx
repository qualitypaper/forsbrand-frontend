import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../app/App";
import ShippingOption from "./shippingoption/ShippingOption";
import "./ShippingOptions.scss";
import { BASE_URL } from "../../../../../assets/constant";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const ShippingOptions = ({
  handleChange,
  setDeliveryState,
  submitOrder,
  amount,
  setOrderId,
  setMerchantSignature,
}) => {
  const {
    orderData,
    setOrderData,
    deliveryOpenMethod,
    setDeliveryOpenMethod,
    deliveryMethod,
    selectedOption,
    setSelectedOption,
    setShowPay,
    setShowPayOpen,
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [departmentValue, setDepartmentValue] = useState("");
  const [addressError, setAddressError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [, setContinueToPayment] = useState(false);
  const [departments, setDepartments] = useState([]);

  //
  useEffect(() => {
    const fetchShippingOptions = async () => {
      const res = await axios.get(`${BASE_URL}/delivery-types/getAll`);
      if (res.data) {
        setShippingOptions(res.data);
      }
    };

    fetchShippingOptions().then();
  }, []);

  const fetchDepartments = async (q) => {
    const res = await axios.get(`${BASE_URL}/post/findDepartment?q=${q}`);

    setDepartments(res.data.map( e => ({value: e, label: e, key: e})));
  }

  const handleInputChange2 = (event) => {
    setInputValue(event.target.value);
    handleChange("deliveryAddress", event.target.value);
  };
  const handleInputChange3 = async (value) => {
    setDepartmentValue(value);
    handleChange("departmentNumber", value);
    await fetchDepartments(value)
    setDepartmentError(null)
  };

  const handleButtonClick4 = () => {
    setOrderData(false);
    setDeliveryOpenMethod(true);
    setContinueToPayment(true);
    setShowPay(true);
    setShowPayOpen(false);
  };

  const handleButtonClick3 = async () => {
    console.log(inputValue);
    if (selectedOption.requiredFieldsList.length === 2) {
      if (inputValue === undefined || inputValue === "") {
        setAddressError("Please provide an address");
        if (departmentValue === undefined || departmentValue === "") {
          setDepartmentError("Please provide an department number");
        }
        return;
      }
    } else {
      if (selectedOption.requiredFieldsList[0] === "ADDRESS_INPUT") {
        if (inputValue === undefined || inputValue === "") {
          setAddressError("Please provide an address");
          return;
        }
      } else if (departmentValue === undefined || departmentValue === "") {
        setDepartmentError("Please provide an department number");
        return;
      }
    }

    setOrderData(true);
    setDeliveryOpenMethod(false);
    setShowPay(false);

    const result = await submitOrder();
    console.log(result);
    if (!result) {
      alert("Произошла ошибка при оформлении заказа, попробуйте позже.");
      return;
    }
    let amountToPay;

    if (result.promocodes) {
      amountToPay =
        result.totalPrice -
        Math.ceil((result.totalPrice * result.promocodes.discount) / 100);
    } else {
      amountToPay = result.totalPrice;
    }

    console.log("🚀 ~ handleButtonClick3 ~ amountToPay:", amountToPay);

    const signature = await generateMerchantSignature(result.id, amountToPay);
    setOrderId(result.id);
    setMerchantSignature(signature);
    setShowPayOpen(true);
    setDeliveryState(true);
    console.log("id", selectedOption.id);
    handleChange("deliveryTypeId", selectedOption.id);
    handleChange("deliveryAddress", inputValue);
    handleChange("departmentNumber", departmentValue);
  };
  const handleShippingOptionChange = (option) => {
    console.log(option);
    setSelectedOption({});
    setDepartmentError(null)
    setAddressError(null)
    setInputValue("");
    setDepartmentValue("");
    setSelectedOption(option);
    handleChange("deliveryAddress", "");
    handleChange("departmentNumber", "");
    handleChange("deliveryTypeId", option.id);
  };

  return (
    <>
      {orderData && (
        <div className="checkout-left-show-order">
          <div className="checkout-left-show-text">
            <p>Спосіб доставки: </p>
            <p onClick={handleButtonClick4} className="cu-p">
              Змінити
            </p>
          </div>
          <p className="checkout-open-text">{selectedOption.name} </p>
          <div className="d-flex">
            {inputValue && (
              <p className="checkout-open-text mr-5">Address: {inputValue}</p>
            )}
            {departmentValue && (
              <p className="checkout-open-text">
                Department: {departmentValue}
              </p>
            )}
          </div>
        </div>
      )}
      {deliveryOpenMethod && (
        <div className="checkout-options">
          <div className="radio-delivery">
            <p>Спосіб доставки:</p>
          </div>
          {shippingOptions.length > 0 ? (
            shippingOptions.map((shipping) => (
              <ShippingOption
                key={shipping.id}
                showErrorAddress={addressError}
                showErrorDepartmentNumber={departmentError}
                id={shipping.id}
                label={shipping.name}
                selectedOption={selectedOption}
                onChange={() => handleShippingOptionChange(shipping)}
                addressValue={inputValue}
                departmentValue={departmentValue}
                handleInputChange={handleInputChange2}
                handleInputChange2={handleInputChange3}
                departments={departments}
              />
            ))
          ) : (
            <div>
              <p className="select_sizeCheckout">
                <Stack sx={{ width: "100%" }} spacing={1}>
                  <Alert severity="error">
                    Вибачте в данний час ми не можемо доставити ваш товар! Дякую
                    за розуміння
                  </Alert>
                </Stack>
              </p>
            </div>
          )}
          {shippingOptions.length > 0 ? (
            <>
              <button
                onClick={handleButtonClick3}
                style={{marginTop: "20px"}}
                className="checkout-left__shipping"
              >
                <p>Продовжити</p>
              </button>
            </>
          ) : null}
        </div>
      )}
      {deliveryMethod && (
        <div className="checkout-left-delivery">
          <p>Спосіб доставки</p>
        </div>
      )}
    </>
  );
};
export default ShippingOptions;

export async function generateMerchantSignature(id, amountToPay) {
  const data = [
    "www_forsbrand_com_ua", // Merchant account
    "https://www.forsbrand.com.ua/",
    id,
    "1415379863",
    amountToPay, // Amount
    "UAH", // Currency
    "Товары",
    "Количество",
    1,
    1,
    amountToPay,
    0,
  ].join(";");

  console.log(data);

  const url = `${BASE_URL}/hmacmd5?string=${data}`;
  console.log("🚀 ~ generateSignature ~ url:", url);

  return (await axios.get(url)).data;
}
