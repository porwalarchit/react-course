import RestaurantCard, { withOpenStatus } from "./RestaurantCard";
import { restaurantsData } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  RestaurantCardOpenStatus = withOpenStatus(RestaurantCard);
  
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_CDN);

    const jsonData = await data.json();


    // console.log(jsonData);
    // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // Optional Chaining
    setRestaurantData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  // if (restaurantData.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you're offline!! Check your Internet Connection.</h1>;
  }

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-2 ">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-slate-100 m-4 border border-solid border-black rounded-lg"
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
        <div className="search m-2 ">
          <button
            className="px-4 py-1 bg-slate-100 m-4 border border-solid border-black rounded-lg"
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
        <div className="search m-2 ">
          UserName:
          <input
            className="px-4 py-1 bg-slate-100 m-4 border border-solid border-black rounded-lg"
            value={loggedInUser}
            onChange={(e)=> setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurantmenu/" + restaurant.info.id}
          >
            {restaurant.info?.availability?.opened ? (
              <RestaurantCardOpenStatus {...restaurant.info} />
            ) : (
              <RestaurantCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
