import React from "react";

const SideBar = () => {
  return (
    <div>
      <ul className="flex flex-col bg-gray-50 h-fit w-[30vh] space-y-5">
        <li className="text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          Account Details
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          Security
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          Billing & Payment
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          Order History
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          Wishlist/Favorites
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
