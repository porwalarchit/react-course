import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  // console.log(data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () =>{
    setShowItems(!showItems);
  }

  return (
    <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-md p-4 ">
      {/* Accordian Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data &&
            data.title &&
            data.itemCards &&
            Array.isArray(data.itemCards)
            ? `${data.title} (${data.itemCards.length})`
            : `${data.title}`}
        </span>
        <span>⬇️</span>
      </div>

      {/* Accordian Body */}
      {showItems && (data &&
            data.title &&
            data.itemCards &&
            Array.isArray(data.itemCards)
            ? <ItemList items={data?.itemCards}/>
            : `${data.title}`)}
      
    </div>
  );
};

export default RestaurantCategory;
