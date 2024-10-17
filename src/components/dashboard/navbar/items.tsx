import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { FaMinus } from "react-icons/fa6";

const Items = () => {
  const { cart, totalQuantityPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="overflow-scroll w-[80vh] h-[350px] border-2 border-gray-200 rounded-md bg-white shadow-lg">
        <h1 className="font-bold text-4xl p-2 mx-2">Your Items</h1>

        <div className="grid grid-cols-1 gap-4">
          <div className="w-full h-full">
            {cart.map((pic, idx) => (
              <div key={idx} className="flex m-4 shadow-md rounded-md ">
                <img
                  src={pic.product.images}
                  alt="cart image"
                  className="w-[150px] h-[150px] rounded-md mb-5"
                />

                <div className="m-2 w-full">
                  <h1 className="font-medium px-3 text-xl">
                    {pic.product.title}
                  </h1>
                  <div className="flex px-3 py-5 justify-start items-center">
                    <FaMinus
                      size={12}
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(decrementQuantity(pic.product.id))
                      }
                    />
                    <span className="text-2xl font-bold mx-4">
                      {pic.quantity}
                    </span>
                    <FaPlus
                      size={12}
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(incrementQuantity(pic.product.id));
                      }}
                    />
                  </div>
                  <FaTrash
                    size={15}
                    className="ml-2 cursor-pointer"
                    onClick={() => {
                      dispatch(
                        removeFromCart({
                          productId: pic.product.id,
                          price: pic.product.price,
                        })
                      );
                    }}
                  />
                  <div className="flex justify-end items-center">
                    <h1 className="font-bold text-2xl">
                      {Number(pic.product.price.toFixed(2))} $
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-2xl font-bold bg-green-200 p-4 text-center">
            Total Price : {totalQuantityPrice.toFixed(2)} $
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
