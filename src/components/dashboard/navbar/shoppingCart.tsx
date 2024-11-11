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

const ShoppingCart = () => {
  const { cart, totalQuantityPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="overflow-scroll w-fit h-screen p-2 mx-4 translate-x-2 md:w-[80vh] md:h-[350px] border-2 overflow-x-hidden border-gray-200 rounded-md bg-gray-200 shadow-lg">
        <div className=" flex p-2 justify-between items-center mx-2 border-b-2 border-gray-400 pb-4 w-full">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <h1 className="font-bold text-xl p-2 border-2 border-gray-400 bg-white rounded-lg shadow-md">
            {cart.length} Items
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 ">
          <div className="w-full h-full">
            {cart.map((pic, idx) => (
              <div
                key={idx}
                className="flex m-4 shadow-md rounded-md bg-orange-50 p-2 justify-center items-center "
              >
                <img
                  src={pic.product.image}
                  alt="cart image"
                  className="w-[200px] h-[200px] rounded-md mb-5 shadow-right"
                />

                <div className="m-2 w-full justify-items-center md:justify-items-start space-y-4">
                  <h1 className="font-medium px-3 text-xl">
                    {pic.product.title.substring(0, 45)}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-between w-full   p-2">
                    <div className="flex px-2 my-5 justify-start items-center text-gray-600">
                      <FaMinus
                        size={12}
                        className="cursor-pointer border-2 p-1 w-fit h-fit border-gray-200 rounded-md hover:bg-slate-200"
                        onClick={() =>
                          dispatch(decrementQuantity(pic.product.id))
                        }
                      />
                      <span className="text-2xl font-bold mx-2">
                        {pic.quantity}
                      </span>
                      <FaPlus
                        size={12}
                        className="cursor-pointer border-2 p-1 w-fit h-fit border-gray-200 rounded-md hover:bg-slate-200"
                        onClick={() => {
                          dispatch(incrementQuantity(pic.product.id));
                        }}
                      />
                    </div>
                    <div className="flex w-fit h-fit">
                      <h1 className="font-bold text-2xl p-2 rounded-lg shadow-md bg-orange-300">
                        {Number(pic.product.price.toFixed(2))} $
                      </h1>
                    </div>
                  </div>
                  <div
                    className="flex justify-start items-center cursor-pointer text-red-600"
                    onClick={() => {
                      dispatch(
                        removeFromCart({
                          productId: pic.product.id,
                          price: pic.product.price,
                        })
                      );
                    }}
                  >
                    <FaTrash size={15} className="mx-2 cursor-pointer " />
                    Delete
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-2xl md:text-3xl font-bold bg-orange-500 p-4 text-center rounded-lg text-white">
            Total Price : {totalQuantityPrice.toFixed(2)} $
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
