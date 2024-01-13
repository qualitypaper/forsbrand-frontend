
import "./HeaderClothes.scss";
import "../../../adaptive/mainpage/MainPageAdaptive.scss"
import Card from "./card/Card";
import Skeleton from '@mui/material/Skeleton';
export const HeaderClothes = ({ onPlus, currentItems }) => {

    return (
        <div className="container">
            <section className="header__clothes-card">
                {currentItems &&
                    currentItems.map((card) => (
                        <Card
                            key={card.id}
                            onPlus={onPlus}
                            card={card}
                        />

                    ))
                }
            </section>
        </div>
    );
};