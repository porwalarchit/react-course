import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurantMenu_CDN } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(RestaurantMenu_CDN + resId);
    const jsonData = await menuData.json();

    console.log("res data",jsonData);
    setResMenuData(jsonData.data);
  };
  if (resMenuData.length === 0) {
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
