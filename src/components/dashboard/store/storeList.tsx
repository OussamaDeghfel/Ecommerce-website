import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appDispatch, RootState } from "../../redux/store";
import { addFavoriteProductToList, fetchProducts, removeFavoriteProductFromList } from "../../redux/productSlice";
import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingBag, FaStarHalfAlt } from "react-icons/fa";
import {
  addToCart,
  chooseFavorite,
  removeFavorite,
} from "../../redux/cartSlice";
import {
  FaAngleDown,
  FaAngleUp,
  FaFilter,
  FaStar,
  FaStarHalf,
} from "react-icons/fa6";
import { Button, Input, Select } from "antd";
// import { ProductData } from "../../redux/types";

const StoreList = () => {
  const dispatch = useDispatch<appDispatch>();
  const product = useSelector((state: RootState) => state.product.product);
  const favoriteList = useSelector((state: RootState) => state.product.favoriteList);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedRate, setSelectedRate] = useState(null);
  // const [favlist, setFavlist] = useState<string[]>(favoriteList);
  const [showFilter, setShowFiter] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState(product);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //filter the category for only one name cause of duplicate
  const uniqueFilter = [
    ...new Map(product.map((item) => [item["category"], item])).values(),
  ];

  const handleSearch = () => {
    setFilterActive(true);
    let filteredProduct = [...product];

      if (selectedCategory) {
        filteredProduct = filteredProduct.filter(
          (item) => item.category === selectedCategory
        );
        
      }

      if (minPrice) {
        filteredProduct = filteredProduct.filter(
          (item) => item.price >= Number(minPrice)
        );
       
      }
      if (maxPrice) {
        filteredProduct = filteredProduct.filter(
          (item) => item.price <= Number(maxPrice)
        );
        
      }

      if (selectedRate) {
        if (selectedRate === "2") {
          filteredProduct = filteredProduct.filter(
            (product) => product.rating.rate > 4.0
          );
        } else if (selectedRate === "3") {
          filteredProduct = filteredProduct.filter(
            (product) => product.rating.rate > 4.5
          );
        }
        
      }
      setFilteredProduct(filteredProduct);
  };

  const handleClear = () => {
    setSelectedCategory(null);
    setMinPrice("");
    setMaxPrice("");
    setSelectedRate(null);
    setFilteredProduct(product);
    setFilterActive(false);
  };

  // const handleFavoriteProduct = (id: string) => {
  //   const verifyExistProduct = favlist.find((item) => item === id);
  //   if (!verifyExistProduct) {
  //     const newList = [...favlist, id];
  //     setFavlist(newList);
  //   } else {
  //     const newList = favlist.filter((item) => item !== id);
  //     setFavlist(newList);
  //   }
  //   console.log("favList : ", favlist);
  // };

  return (
    <div className="flex flex-col items-center justify-start h-full bg-gray-100 p-4">
      {/* small Size filter dropDown */}
      <div
        className="flex md:hidden space-x-2 justify-center items-center"
        onClick={() => setShowFiter(!showFilter)}
      >
        <FaFilter size={25} color="black" />
        <span className="font-bold text-xl italic">FILTER</span>
        {!showFilter ? <FaAngleDown size={15} /> : <FaAngleUp size={15} />}
      </div>

      {showFilter && (
        <div className="flex justify-center items-center mt-2 md:hidden">
          <div className="p-2 grid grid-cols-1 gap-4 w-full rounded-md bg-gray-100 shadow-md ">
            <div className="flex flex-col h-fit">
              <Select
                className="w-full"
                placeholder="By Category"
                options={uniqueFilter.map((item) => ({
                  value: item.category,
                  label: item.category,
                }))}
                value={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}
                allowClear
              />
            </div>
            <div className="flex flex-col h-fit">
              <div className="space-x-2 flex justify-center w-full items-center">
                <Input
                  placeholder="Min PRICE"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                  placeholder="Max PRICE"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col h-fit">
              <Select
                className="w-full"
                placeholder="By Rate"
                options={[
                  {
                    value: "1",
                    label: "ALL",
                  },
                  {
                    value: "2",
                    label: "Above 4.0",
                  },
                  {
                    value: "3",
                    label: "Above 4.5",
                  },
                ]}
                value={selectedRate}
                onChange={(value) => setSelectedRate(value)}
                allowClear
              />
            </div>
            <div className="space-x-4 items-end justify-end flex">
              <Button
                className="w-fit justify-center items-end font-medium"
                danger
                onClick={handleSearch}
              >
                Search
              </Button>
              <Button
                className="w-fit justify-center items-end font-medium"
                color="default"
                variant="outlined"
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex justify-center items-center">
        <div className="p-5 m-5 grid grid-cols-5 gap-6 w-full">
          <h1 className="uppercase flex font-medium items-center text-black text-xl italic w-fit">
            <FaFilter size={25} color="black" /> filter :
          </h1>
          <div className="flex flex-col pr-5 h-fit">
            <Select
              className="w-full"
              placeholder="By Category"
              options={uniqueFilter.map((item) => ({
                value: item.category,
                label: item.category,
              }))}
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              allowClear
            />
          </div>
          <div className="flex flex-col  pr-5 h-fit">
            <div className="space-x-2 flex justify-center w-full items-center">
              <Input
                placeholder="Min PRICE"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Input
                placeholder="Max PRICE"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col pr-5 h-fit">
            <Select
              className="w-full"
              placeholder="By Rate"
              options={[
                {
                  value: "1",
                  label: "ALL",
                },
                {
                  value: "2",
                  label: "Above 4.0",
                },
                {
                  value: "3",
                  label: "Above 4.5",
                },
              ]}
              value={selectedRate}
              onChange={(value) => setSelectedRate(value)}
              allowClear
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              className="w-fit justify-center items-end font-medium"
              danger
              onClick={handleSearch}
            >
              Search
            </Button>
            <Button
              className="w-fit justify-center items-end font-medium"
              color="default"
              variant="outlined"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full h-full p-10 m-5 grid md:grid-cols-3 lg:grid-cols-4 gap-8 border-t-2 border-gray-300">
        {!filterActive &&
          product.map((prod) => (
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
                  className={`absolute top-0 right-0 p-2 cursor-pointer hover:scale-125 m-2 rounded-full ${
                    favoriteList.includes(prod.id)
                      ? "bg-red-600 opacity-100"
                      : "bg-gray-400 opacity-80"
                  } `}
                  onClick={() => {
                    if (!favoriteList.includes(prod.id)) {
                      dispatch(
                        // chooseFavorite({
                        //   id: prod.id,
                        //   title: prod.title,
                        //   category: prod.category,
                        //   image: prod.image,
                        //   price: prod.price,
                        //   rating: prod.rating,
                        // })
                        chooseFavorite(prod)
                      ),
                        // dispatch(favorite(prod.id));
                        dispatch(addFavoriteProductToList(prod.id));
                    } else if (favoriteList.includes(prod.id)) {
                      dispatch(removeFavorite({ productID: prod.id }));
                      dispatch(removeFavoriteProductFromList(prod.id));

                      // dispatch(favorite(prod.id));
                    }
                    // handleFavoriteProduct(prod.id);
                  }}
                >
                  <FaRegHeart color="white" size={25} />
                </div>
              </div>

              <div className="flex flex-col p-2 justify-between h-[30vh]">
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
                  <span className="font-thin ml-2">({prod.rating.count})</span>
                </div>

                <div className="flex justify-between items-end ">
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
                    <FaShoppingBag className="mr-2" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

        {filterActive &&
          filteredProduct.length > 0 &&
          filteredProduct.map((prod) => (
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
                  className={`absolute top-0 right-0 p-2 cursor-pointer hover:scale-125 m-2 rounded-full ${
                    favoriteList.includes(prod.id)
                      ? "bg-red-600 opacity-100"
                      : "bg-gray-400 opacity-80"
                  } `}
                  onClick={() => {
                    if (!favoriteList.includes(prod.id)) {
                      dispatch(
                        // chooseFavorite({
                        //   id: prod.id,
                        //   title: prod.title,
                        //   category: prod.category,
                        //   image: prod.image,
                        //   price: prod.price,
                        //   rating: prod.rating,
                        // })
                        chooseFavorite(prod)
                      ),
                        // dispatch(favorite(prod.id));
                        dispatch(addFavoriteProductToList(prod.id));
                    } else if (favoriteList.includes(prod.id)) {
                      dispatch(removeFavorite({ productID: prod.id }));
                      // dispatch(favorite(prod.id));
                      dispatch(removeFavoriteProductFromList(prod.id));
                    }
                    // handleFavoriteProduct(prod.id);
                  }}
                >
                  <FaRegHeart color="white" size={25} />
                </div>
              </div>

              <div className="flex flex-col p-2 justify-between h-[30vh]">
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
                  <span className="font-thin ml-2">({prod.rating.count})</span>
                </div>

                <div className="flex justify-between items-end ">
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
                    <FaShoppingBag className="mr-2" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {filterActive && filteredProduct.length === 0 && (
        <div>
          <h1 className="w-full h-full text-4xl font-bold pb-8 text-center">
            No Product Match The Search
          </h1>
        </div>
      )}
    </div>
  );
};

export default StoreList;
