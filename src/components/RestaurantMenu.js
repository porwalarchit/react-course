import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuData = useRestaurantMenu(resId);
  
  if (resMenuData === null) {
    return <Shimmer />;
  }

  const {
    name,
    costForTwoMessage,
    cuisines,
    areaName,
    locality,
    totalRatingsString,
  } = resMenuData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h5>
        {areaName}, {locality}
      </h5>
      <h5>{totalRatingsString}</h5>
      <ul>
        <h4>Recommended Items</h4>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
