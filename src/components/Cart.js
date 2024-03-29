import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h1 className="text-lg font-bold">Cart is Empty. Add Items to the Cart.</h1>
      ) : (
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-md p-4">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
