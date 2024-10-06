import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appDispatch, RootState } from "../redux/store";



const StoreList = () => {
  
  const dispatch = useDispatch<appDispatch>();
  const products = useSelector((state:RootState) => state.product.product)

  // useEffect(() => {
  //   dispatch(fetchProducts)
  // },[])

  console.log("products", products)


  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="font-bold text-black text-2xl pb-4">WE LOVE COMFORT</h1>
      <div className="flex-col">
        <button className="px-4 py-2 bg-yellow-950 text-white font-medium mx-2 rounded-md">
          Featured
        </button>
        <button className="px-4 py-2 bg-yellow-950 text-white font-medium mx-2 rounded-md">
          New
        </button>
        <button className="px-4 py-2 bg-yellow-950 text-white font-medium mx-2 rounded-md">
          Best
        </button>
      </div>
      <div className="p-5 m-5 grid grid-cols-5 gap-4">
        {/* {imageData.map((image, idx) => (
          <>
            <div
              key={idx}
              className="w-full h-full bg-gray-300 pb-2 rounded-md"
            >
              <img
                className="w-[200px] h-[200px] rounded-t-md"
                src={image.urls.thumb}
                alt="just image"
              />
              <div className="px-2">
                <h1 className="font-bold my-2">{image.user.name}</h1>
                <h1 className="font-bold my-2">{image.price.toFixed(2)} $</h1>
                <button
                  className="flex items-center text-[#fc142c] font-bold border-2 border-red-600 rounded-md  px-2 my-1"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        product: {
                          id: image.id,
                          name: image.user.name,
                          url: image.urls.small,
                          price: image.price,
                        } as Product,
                        quantity: 1,
                        quantityPrice: image.price,
                      })
                    );
                  }}
                >
                  <FaShoppingBag className="mr-2" /> Add To Cart
                </button>
              </div>
            </div>
          </>
        ))} */}
      </div>
    </div>
  );
};

export default StoreList;
