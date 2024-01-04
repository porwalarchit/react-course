import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

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

  // const { itemCards } =
  //   resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  // console.log(resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => {
      const cardType = category?.card?.card?.["@type"];
      return (
        cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    }
  );
  
  // console.log("C",categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h4 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h5>
        {areaName}, {locality}
      </h5>

      {/* Categories Accordian */}
      {categories.map((category)=> <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;
