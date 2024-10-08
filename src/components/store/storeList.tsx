import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appDispatch, RootState } from "../redux/store";
import { fetchProducts } from "../redux/productSlice";
import { useEffect, useMemo, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { FcClearFilters } from "react-icons/fc";

const StoreList = () => {
  // const [productList , setProductList] = useState([]);

  const [searchByCategory, setSearchByCategory] = useState("");

  const dispatch = useDispatch<appDispatch>();
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //filter the category for only one name cause of duplicate
  const uniqueFilter = [
    ...new Map(
      product.map((item) => [item["category"]["name"], item])
    ).values(),
  ];
console.log("search by cat : ", searchByCategory)

  const filteredProduct = useMemo(() => {
    if (searchByCategory) {
      return product.filter((item) => item.category.name === searchByCategory);
    } else {
      return product;
    }
  }, [searchByCategory, product]);

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="font-bold text-black text-2xl pb-4">FIND YOUR PRODUCT</h1>
      <div className="flex justify-center items-center">
        <div className="p-5 m-5 grid grid-cols-5 gap-4 w-full">
        {uniqueFilter.map((prod) => (
          <>
            <button
              value={prod.category.name}
              onClick={() => setSearchByCategory(prod.category.name)}
              className="px-4 py-2 bg-orange-500 text-white font-medium mx-2 rounded-md"
              key={prod.category.id}
            >
              {prod.category.name}
            </button>
          </>
        ))}
        </div>
        <span>
          <FcClearFilters size={30} onClick={() => setSearchByCategory("")} className="cursor-pointer" />
        </span>
      </div>
      <div className="p-5 m-5 grid grid-cols-5 gap-4">
        {filteredProduct.map((prod) => (
          <>
            <div
              key={prod.id}
              className="w-full h-full bg-gray-300 pb-2 rounded-md"
            >
              <img
                className="w-full h-[200px] rounded-t-md"
                src={prod.images[0]}
                alt="just image"
              />
              <div className="px-2">
                <h1 className="font-bold text-xl my-2">{prod.title}</h1>
                <h1 className="font-base my-2">{prod.category.name}</h1>
                <h1 className="font-bold my-2">{prod.price} $</h1>
                <button
                  className="flex items-center text-blue-800 font-bold border-2 border-blue-600 rounded-md  px-2 my-1"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        product: {
                          id: prod.id,
                          title: prod.title,
                          images: prod.images[0],
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
          </>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
