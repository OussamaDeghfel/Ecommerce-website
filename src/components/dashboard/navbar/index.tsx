import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/quickbuy_logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaUser } from "react-icons/fa";
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
  const [activeBarSelect, setActiveBarSelect] = useState<string>("home");
  const [openNavBar, setOpenNavBar] = useState(false);
  const navigate = useNavigate();

  const favRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (favRef.current && !favRef.current.contains(e.target as Node)) {
        setShowFavorite(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setShowProducts(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-fit m-auto pt-8">
        <img className="w-fit h-[30px] " src={logo} alt="store logo" />
        <div className="flex justify-between items-center w-full ">
          <div className="flex md:hidden justify-between items-center w-full px-2">
            <FaBars
              size={30}
              onClick={() => setOpenNavBar(!openNavBar)}
              className="z-10"
            />
            {openNavBar && (
              <>
                <ul className="flex flex-col bg-white shadow-lg w-fit h-fit space-y-5 py-6 px-4 rounded-md fixed transform translate-x-1/4 translate-y-24 text-2xl z-10 duration-700">
                  <li
                    className={`p-2 text-black font-medium mx-4 cursor-pointer 
            ${activeBarSelect === "home" && "text-orange-500"}`}
                    onClick={() => {
                      setActiveBarSelect("home"), setOpenNavBar(false);
                    }}
                  >
                    {" "}
                    <Link to="/home">Home</Link>
                  </li>
                  <li
                    className={`p-2 text-black font-medium mx-4 cursor-pointer 
            ${activeBarSelect === "store" && "text-orange-500"}`}
                    onClick={() => {
                      setActiveBarSelect("store"), setOpenNavBar(false);
                    }}
                  >
                    <Link to="/store">Store</Link>
                  </li>
                  <li
                    className={`p-2 text-black font-medium mx-4 cursor-pointer 
            ${activeBarSelect === "about" && "text-orange-500"}`}
                    onClick={() => {
                      setActiveBarSelect("about"), setOpenNavBar(false);
                    }}
                  >
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </>
            )}
            
          </div>
          <div className=" hidden md:flex justify-center m-auto items-center">
            <ul className="flex">
              <li
                className={`p-2 text-black font-medium mx-4 cursor-pointer 
              ${activeBarSelect === "home" && "text-orange-500"}`}
                onClick={() => setActiveBarSelect("home")}
              >
                {" "}
                <Link to="/home">Home</Link>
              </li>
              <li
                className={`p-2 text-black font-medium mx-4 cursor-pointer 
              ${activeBarSelect === "store" && "text-orange-500"}`}
                onClick={() => setActiveBarSelect("store")}
              >
                <Link to="/store">Store</Link>
              </li>
              <li
                className={`p-2 text-black font-medium mx-4 cursor-pointer 
              ${activeBarSelect === "about" && "text-orange-500"}`}
                onClick={() => setActiveBarSelect("about")}
              >
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
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
      </div>

      <div className="absolute right-6 z-10" ref={cartRef}>
        {showProducts && <ShoppingCart />}{" "}
      </div>
      <div className="absolute right-14 z-10" ref={favRef}>
        {showFavorite && <FavProducts />}
      </div>
    </>
  );
};

export default NavBar;
