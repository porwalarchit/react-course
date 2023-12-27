import RestaurantCard from "./RestaurantCard";
import { restaurantsData } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_CDN } from "../utils/constants";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_CDN);

    const jsonData = await data.json();

    // console.log(jsonData);
    // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //   ?.restaurants);
    
    // Optional Chaining
    setRestaurantData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  // if (restaurantData.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredData = restaurantData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filteredData = restaurantData.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurantmenu/" + restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
