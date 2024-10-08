import React, { useState } from "react";
import logo from "../../assets/Ecomlogo.png";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Items from "./items";
const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { cart } = useSelector((state: RootState) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <div className="flex justify-between pt-4">
        <img className="w-[90px] h-[30px] " src={logo} alt="" />
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
          <div className="flex justify-center items-center ">
            <button className="search-button" onClick={toggleSearch}>
              <FaMagnifyingGlass className="cursor-pointer" />
            </button>

            {showSearch && (
              <button className="close-button">
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 outline-none"
                />
              </button>
            )}
          </div>
          <button className="m-4">
            <Link to="/accountDetails">
              <FaUser />
            </Link>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaCartShopping />
            <span className="absolute top-10 right-5 bg-black text-white px-1 rounded-lg w-[20px] h-[25px]">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
      <div className="absolute right-6">{isOpen && <Items />} </div>
    </>
  );
};

export default NavBar;
