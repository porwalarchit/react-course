import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const {restraunt} = props;
  // const  = restraunt;
  return (
    <div className="m-2 p-4 w-[250px] h-80 bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="w-[200px] h-44 rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-2 text-lg ">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
    </div>
  );
};

export default RestrauntCard;
