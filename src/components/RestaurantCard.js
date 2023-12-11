import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const {restraunt} = props;
  // const  = restraunt;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
    </div>
  );
};

export default RestrauntCard;
