import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BsTrash2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/cartSlice";

const FavProducts = () => {
  const favoriteProduct = useSelector((state: RootState) => state.cart.favCart);

  const dispatch = useDispatch();


  return (
    <div className="w-full h-full justify-center items-center border-2 border-gray-200 bg-white p-10 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-5">
        {favoriteProduct.length > 0 && favoriteProduct.map((prod) => (
          <div
            key={prod.id}
            className="w-60 h-fit bg-orange-50 pb-2 rounded-md shadow-md"
          >
            <div className="relative">
              <img
                className="w-60 h-56 rounded-t-md"
                src={prod.images}
                alt="just image"
              />
              <div
                className=" absolute top-0 right-0 p-2 cursor-pointer hover:scale-125"
                onClick={() => {
                  dispatch(removeFavorite({ productID: prod.id }));
                }}
              >
                <BsTrash2
                  // className="text-red-500"
                  color="white"
                  size={25}
                />
              </div>
            </div>
            <div className="flex flex-col p-2 justify-between h-[25.5vh]">
              <div className="px-2">
                <h1 className="font-bold text-md my-2">{prod.title}</h1>
                {/* <h1 className="font-medium my-2">{prod.category.name}</h1> */}
              </div>

              <div className="flex justify-between items-end ">
                <h1 className="font-bold my-2 text-2xl">{prod.price} $</h1>
                <button
                  className="flex items-center text-blue-800 font-bold p-2 border-2 border-blue-600 rounded-md  px-2 my-1 hover:bg-blue-500 hover:text-white duration-200"
                  // onClick={() => {
                  //   dispatch(
                  //     addToCart({
                  //       product: {
                  //         id: prod.id,
                  //         title: prod.title,
                  //         images: prod.images[0],
                  //         price: prod.price,
                  //       },
                  //       quantity: 1,
                  //       quantityPrice: prod.price,
                  //     })
                  //   );
                  // }}
                >
                  <FaShoppingBag className="mr-2" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavProducts;
