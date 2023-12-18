import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2156354&lng=72.63694149999999&restaurantId=130203&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await menuData.json();

    console.log(jsonData);
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
    resMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log("Menu", itemCards);
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
      <ul> <h4>Recommended Items</h4>
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
