import RestrauntCard from "./RestaurantCard";
import { restaurantsData } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-list">
        {restaurantsData.map((restraunt) => {
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
        })}
      </div>
    </div>
  )
}

export default Body;