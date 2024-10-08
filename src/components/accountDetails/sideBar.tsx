import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul className="flex flex-col h-fit w-[35vh] space-y-5">
        <li className="text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          <Link to="/accountInfo">Account Details</Link>
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          <Link to="/security">Security</Link>
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          <Link to="/payment">Billing & Payment</Link>
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          <Link to="/orderHistory">Order History</Link>
        </li>
        <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
          <Link to="/favorList">Wishlist/Favorites</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
