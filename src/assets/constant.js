// export const BASE_URL = "https://api.forsbrand.com.ua";
export const BASE_URL = "http://localhost:8080";
export const ERROR_HREF = "/website-down";
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
export const currencyValue = "₴";
export const COOKIE_EXPIRATION_DAYS = 30;

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
