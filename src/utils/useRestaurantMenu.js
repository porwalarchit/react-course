import { useEffect, useState } from "react";
import { RestaurantMenu_CDN } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(RestaurantMenu_CDN + resId);
    const jsonData = await menuData.json();

    // console.log("res data",jsonData);
    setResMenuData(jsonData.data);
  };

  return resMenuData;
}

export default useRestaurantMenu;