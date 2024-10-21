import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul className="flex flex-col h-fit w-[35vh] space-y-5">
        <Link to="accountInfo">
          <li className="text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
            Account Details
          </li>
        </Link>
        <Link to="security">
          <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
            Security
          </li>
        </Link>
        <Link to="payment">
          <li className="text-xl  p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300">
            Billing & Payment
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
