import { useContext } from "react";
import { AppContext } from "../components/app/App";

export const BASE_URL = "http://localhost:8080";
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const currencyValue = "₴";

export const constructPrice = (currentClothing) => {
    if (!currentClothing) {
        return "";
    }

    const { currentPrice, originalPrice } = currentClothing;

    if (currentPrice !== undefined && originalPrice !== undefined) {
        return (
            <>
                <span className="original_price">
                    {originalPrice + currencyValue}
                </span>
                <span>{currentPrice + currencyValue}</span>
            </>
        );
    } else {
        return <span>{originalPrice + currencyValue}</span>;
    }
};
const SomeComponent = () => {
    const { currentClothing } = useContext(AppContext);


    return <div>{constructPrice(currentClothing)}</div>;
};

export default SomeComponent;