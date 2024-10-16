import { useState } from "react";
import logo from "../../../assets/quickbuy_logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Items from "./items";
import { BiHeart } from "react-icons/bi";
import FavProducts from "./favProducts";
const NavBar = () => {
  // const [showSearch, setShowSearch] = useState(false);
  const { cart } = useSelector((state: RootState) => state.cart);

  const [isOpen, setIsOpen] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };
  return (
    <>
      <div className="flex justify-between pt-4">
        <img className="w-fit h-[30px] " src={logo} alt="store logo" />
        <div>
          <ul className="flex">
            <li className="p-2 text-black font-medium mx-4 cursor-pointer">
              {" "}
              <Link to="/home">Home</Link>
            </li>
            <li className="p-2 text-black font-medium mx-4 cursor-pointer">
              <Link to="/store">Store</Link>
            </li>
            <li className="p-2 text-black font-medium mx-4 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="search-button" onClick={() => setShowFavorite(!showFavorite)}>
            <BiHeart size={25} color="orange" />
            
          </button>

          <button className="m-4">
            <Link to="/accountDetails/accountInfo">
              <FaUser size={20} color="orange" />
            </Link>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaCartShopping size={25} color="orange" />
            <span className="absolute top-10 right-5 bg-orange-300 text-white px-1 rounded-lg w-[20px] h-[25px]">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
      <div className="absolute right-6 z-10">{isOpen && <Items />} </div>
      <div className="absolute right-14 z-10">
        {showFavorite && <FavProducts />}
      </div>
    </>
  );
};

export default NavBar;
