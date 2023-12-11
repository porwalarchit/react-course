import RestaurantCard from "./RestaurantCard";
import { restaurantsData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(restaurantsData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = restaurantData.filter(
              (res) => res.info.avgRating >= 4
            );
            setRestaurantData(filteredData);
            // console.log(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
