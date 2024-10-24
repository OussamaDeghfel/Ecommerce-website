import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/quickbuy_logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BiHeart } from "react-icons/bi";
import FavProducts from "./favProducts";
import { Dropdown, MenuProps, Popover } from "antd";
import { FiLogOut } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";
import ShoppingCart from "./shoppingCart";
const NavBar = () => {
  // const [showSearch, setShowSearch] = useState(false);
  const { cart, favCart } = useSelector((state: RootState) => state.cart);

  const [showProducts, setShowProducts] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);
  const navigate = useNavigate();

  const favRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (favRef.current && !favRef.current.contains(e.target as Node)) {
        setShowFavorite(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };
  const handleLogOut = () => {
    localStorage.setItem("isLogin", "false");
    navigate("/");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to="/accountDetails/accountInfo"
          className="flex justify-center items-center space-x-2 font-bold"
        >
          <MdAccountBox size={20} />
          <span>Account Info</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex w-fit justify-between items-center space-x-2 font-bold"
          onClick={handleLogOut}
        >
          <FiLogOut size={20} />
          <p>LogOut</p>
        </div>
      ),
    },
  ];

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
        <div className="flex justify-between items-center ">
          <div className="relative mx-3 cursor-pointer">
            {favCart.length === 0 ? (
              <Popover
                placement="bottom"
                title="No Favorite Products"
                className="font-bold"
              >
                <BiHeart size={25} color="orange" />
              </Popover>
            ) : (
              <button
                onClick={() => {
                  setShowFavorite(!showFavorite);
                  setShowProducts(false);
                }}
              >
                <BiHeart size={25} color="orange" />
                <span className="absolute left-5 top-3 bg-orange-300 text-white px-1 rounded-lg text-sm w-fit h-fit">
                  {favCart.length}
                </span>
              </button>
            )}
          </div>

          <div className="relative mx-2 cursor-pointer">
            {cart.length === 0 ? (
              <Popover
                placement="bottom"
                title="No Products In Cart"
                className="text-4xl"
              >
                {" "}
                <FaCartShopping size={25} color="orange" />{" "}
              </Popover>
            ) : (
              <button
                onClick={() => {
                  setShowProducts(!showProducts);
                  setShowFavorite(false);
                }}
              >
                <FaCartShopping size={25} color="orange" />
                <span className="absolute  left-5 top-3 bg-orange-300 text-white px-1 rounded-lg text-sm w-fit h-fit">
                  {cart.length}
                </span>
              </button>
            )}
          </div>

          <div>
            <button className="m-4">
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <FaUser size={20} color="orange" />
                </a>
              </Dropdown>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-6 z-10">{showProducts && <ShoppingCart />} </div>
      <div className="absolute right-14 z-10" ref={favRef}>
        {showFavorite && <FavProducts />}
      </div>
    </>
  );
};

export default NavBar;
