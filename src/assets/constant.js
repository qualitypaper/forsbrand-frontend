export const BASE_URL = "http://localhost:8080";
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const currencyValue = "₴";

const constructPrice = (currentClothing) => {
  if (!currentClothing.originalPrice) {
    return;
  }
  if (currentClothing.currentPrice !== currentClothing.originalPrice) {
    return (
      <>
        <span className="original_price">
          {currentClothing.originalPrice + currencyValue}
        </span>
        <span>{currentClothing.currentPrice + currencyValue}</span>
      </>
    );
  } else {
    return <span>{currentClothing.originalPrice + currencyValue}</span>;
  }
};

const SomeComponent = ({ currentClothing }) => {
  return constructPrice(currentClothing);
};

export default SomeComponent;
