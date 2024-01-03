import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating, sla, areaName, aggregatedDiscountInfoV3 }) => {
  // const {restraunt} = props;
  // const  = restraunt;
  return (
    <div className="m-2 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200" style={{ fontFamily: 'Basis_Grotesque_Pro_Bold' }}>
      <div className="relative">
        <img
          className="w-[220px] h-[147px] rounded-lg object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{
            background: 'linear-gradient(to bottom, rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 95%)',
            zIndex: 1,
          }}
        ></div>
        <label className="absolute text-white uppercase font-black top-[77%] left-2 w-full align-text-bottom z-10" style={{fontSize: '22px', lineHeight: '22px', letterSpacing: '-0.5px', fontFamily: "ProximaNovaCond_Black", maxWidth: '200px', overflow: "hidden", textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} >{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</label>
      </div>

      <div>
        <h2 className="font-bold pt-1 text-lg " style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'rgba(2, 6, 12, 0.75)' }}>{name}</h2>
      </div>

      <div className="flex">
        <div className="pr-1 mt-[2px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <span>
            <h6 className="font-bold text-base" style={{ color: 'rgba(2, 6, 12, 0.75)' }}>{avgRating} • {sla?.slaString}</h6>
          </span>
        </div>
      </div>
      <h3 className="text-gray-600" style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cuisines.join(", ")}</h3>
      <h3 className="text-gray-600">{areaName}</h3>
    </div>
  );
};

// HIGHER OPDER COMPONENT
// Input -> RestaurantCard ==>> Output -> withOpenStatus

export const withOpenStatus = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-700 text-white m-2 ml-3 p-1 rounded-lg" style={{ zIndex: 1 }}>Open</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestrauntCard;
