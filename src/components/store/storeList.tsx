import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/productSlice";
import { useEffect, useMemo, useState } from "react";
import { FaRegHeart, FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";
import { addToCart, chooseFavorite } from "../redux/cartSlice";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FcClearFilters } from "react-icons/fc";
import { Select } from "antd";
// import { FcClearFilters } from "react-icons/fc";
// import { BiHeart } from "react-icons/bi";

const StoreList = () => {
  // const [productList , setProductList] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const FavToggle = () => {
    setIsLiked(!isLiked);
  };

  const [searchByCategory, setSearchByCategory] = useState("");

  const dispatch = useDispatch<appDispatch>();
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log(product.map((item) => item.category));
  console.log(product)

  //filter the category for only one name cause of duplicate
  const uniqueFilter = [
    ...new Map(
      product.map((item) => [item["category"], item])
    ).values(),
  ];
  // console.log("search by cat : ", searchByCategory);

  const filteredProduct = useMemo(() => {
    if (searchByCategory) {
      return product.filter((item) => item.category === searchByCategory);
    } else {
      return product;
    }
  }, [searchByCategory, product]);

  return (
    <div className="flex flex-col items-center justify-start h-full bg-gray-100 p-4">
      <h1 className="uppercase font-bold text-black text-2xl p-2 border-2 border-orange-600 rounded-lg ">
        Everything Comes in Your Mind
      </h1>
      <div className="flex justify-center items-center border-2 border-black">
        <div className="p-5 m-5 grid grid-cols-6 gap-4 w-full">
          <Select className="w-full" placeholder="Filter By Category"
          options={uniqueFilter.map((item) => ({value: item.category, label: item.category}))} onChange={(value) => setSearchByCategory(value)} allowClear  />
        </div>
      </div>
      <div className="w-full h-full p-5 m-5 grid grid-cols-4 gap-6">
        {filteredProduct.map((prod) => (
          <>
            <div
              key={prod.id}
              className="w-full h-full bg-white pb-2 rounded-md shadow-md"
            >
              <div className="relative shadow-md">
                <img
                  className="w-full h-72 rounded-t-md"
                  src={prod.image}
                  alt="product image"
                />
                <div
                  className=" absolute top-0 right-0 p-2 cursor-pointer hover:scale-125 bg-gray-400 opacity-80 m-2 rounded-full"
                  onClick={FavToggle}
                >
                  <FaRegHeart
                  color="white"
                    size={25}
                    onClick={() => {
                      dispatch(
                        chooseFavorite({
                          id: prod.id,
                          title: prod.title,
                          images: prod.image,
                          price: prod.price,
                        })
                      );
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col p-2 justify-between h-[25.5vh]">
                <div className="px-2">
                  <h1 className="font-bold text-md my-2">{prod.title}</h1>
                  <h1 className="text-base my-2">{prod.category}</h1>
                </div>

                <div className="flex font-bold">
                  {prod.rating.rate >= 4 && (
                    <div className="flex justify-center items-center space-x-4">
                      <FaStar size={20} className="mr-2" color="orange" />
                      {prod.rating.rate}
                    </div>
                  )}
                  {prod.rating.rate >= 3 && prod.rating.rate < 4 && (
                    <>
                      <FaStarHalfAlt size={20} className="mr-2" color="orange" />
                      {prod.rating.rate}
                    </>
                  )}

                  {prod.rating.rate < 3 && (
                    <>
                      <FaStarHalf size={20} className="mr-1" color="orange" />
                      {prod.rating.rate}
                    </>
                  )}
                </div>

                <div className="flex justify-between items-end ">
                  <h1 className="font-bold my-2 text-xl">{prod.price} $</h1>
                  <button
                    className="flex items-center text-orange-600 font-bold p-2 border-2 border-orange-600 rounded-md  px-2 my-1 hover:bg-blue-500 hover:text-white duration-200"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          product: {
                            id: prod.id,
                            title: prod.title,
                            images: prod.image,
                            price: prod.price,
                          },
                          quantity: 1,
                          quantityPrice: prod.price,
                        })
                      );
                    }}
                  >
                    <FaShoppingBag className="mr-2" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
