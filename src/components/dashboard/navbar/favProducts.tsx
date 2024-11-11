import { FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BsTrash2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart, removeFavorite } from "../../redux/cartSlice";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { favorite } from "../../redux/productSlice";

const FavProducts = () => {
  const favoriteProduct = useSelector((state: RootState) => state.cart.favCart);

  const dispatch = useDispatch();

  return (
    <>
      {favoriteProduct && favoriteProduct.length > 0 && (
        <div className="w-[100%] h-[80vh]  md:w-full md:h-[80vh] justify-center overflow-y-scroll items-center border-2 border-gray-200 bg-gray-200 p-10 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {favoriteProduct.map((prod) => (
              <div
                key={prod.id}
                className=" w-48 h-fit md:w-60 md:h-fit bg-orange-50 p-2 rounded-md shadow-md "
              >
                <div className="relative">
                  <img
                    className="w-60 h-56 rounded-t-md"
                    src={prod.image}
                    alt="image of the product"
                  />
                  <div
                    className=" absolute top-0 right-0 cursor-pointer hover:scale-125 bg-gray-400 opacity-80 p-2 rounded-full"
                    onClick={() => {
                      dispatch(removeFavorite({ productID: prod.id }));
                      dispatch(favorite(prod.id));
                    }}
                  >
                    <BsTrash2 color="white" size={25} />
                  </div>
                </div>
                <div className="flex flex-col p-2 justify-between md:h-[25vh]">
                  <div className="px-2 w-full justify-items-center md:justify-items-start">
                    <h1 className="font-bold text-md my-2">
                      {prod.title.substring(0, 20)}
                    </h1>
                    <h1 className="text-base my-2">{prod.category}</h1>
                  </div>

                  <div className="flex font-bold justify-center items-center md:justify-start md:items-start w-full">
                    {prod.rating.rate >= 4 && (
                      <div className="flex justify-center items-center space-x-4">
                        <FaStar size={20} className="mr-2" color="orange" />
                        {prod.rating.rate}
                      </div>
                    )}
                    {prod.rating.rate >= 3 && prod.rating.rate < 4 && (
                      <>
                        <FaStarHalfAlt
                          size={20}
                          className="mr-2"
                          color="orange"
                        />
                        {prod.rating.rate}
                      </>
                    )}
                    {prod.rating.rate < 3 && (
                      <>
                        <FaStarHalf size={20} className="mr-1" color="orange" />
                        {prod.rating.rate}
                      </>
                    )}
                    <span className="font-thin ml-2">
                      ({prod.rating.count})
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between  md:items-start items-center ">
                    <h1 className="font-bold my-2 text-xl">{prod.price} $</h1>
                    <button
                      className="flex items-center text-orange-600 font-bold p-2 border-2 border-orange-600 rounded-md  px-2 my-1 hover:bg-orange-500 hover:text-white duration-200"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            product: {
                              id: prod.id,
                              title: prod.title,
                              image: prod.image,
                              price: prod.price,
                            },
                            quantity: 1,
                            quantityPrice: prod.price,
                          })
                        );
                      }}
                    >
                      <FaShoppingBag className="mr-2 " /> Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FavProducts;
