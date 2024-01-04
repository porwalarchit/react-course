import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 pb-4 text-left border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs text-gray-600 pr-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute top-[80%] left-10 z-10">
              <button className="px-6 py-1 rounded-lg bg-white text-green-600 shadow-lg text-sm font-bold">
                ADD
              </button>
            </div>
            <img
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : "https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-gourmet-illustration-png-image_9112105.png"
              }
              className="h-24 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
