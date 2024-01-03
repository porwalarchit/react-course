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

  // console.log(resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h5>
        {areaName}, {locality}
      </h5> 
    </div>
  );
};

export default RestaurantMenu;
