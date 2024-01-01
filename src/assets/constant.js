import { useContext } from "react";
import { AppContext } from "../components/app/App";

export const BASE_URL = "http://localhost:8080";
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const currencyValue = "₴";

export const constructPrice = (currentClothing) => {
    if (!currentClothing) {
        return null; // or handle the case when currentClothing is undefined or null
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
// Example usage inside a component
const SomeComponent = () => {
    const { currentClothing } = useContext(AppContext);

    // Use constructPrice function
    const priceMarkup = constructPrice(currentClothing);

    return <div>{priceMarkup}</div>;
};

export default SomeComponent;