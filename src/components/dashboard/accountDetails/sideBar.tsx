import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [choosedDetail, setChoosedDetail] = useState(0);
  return (
    <div>
      <ul className="flex flex-col h-fit w-[35vh] space-y-5">
        <Link to="accountInfo">
          <li className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${choosedDetail === 0 ? "bg-orange-100" : ""}`}
          onClick={() => setChoosedDetail(0)}>
            Account Details
          </li>
        </Link>
        <Link to="security">
          <li className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${choosedDetail === 1 ? "bg-orange-100" : ""}`}
          onClick={() => setChoosedDetail(1)}>
            Security
          </li>
        </Link>
        <Link to="payment">
          <li className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${choosedDetail === 2 ? "bg-orange-100" : ""}`}
          onClick={() => setChoosedDetail(2)}>
            Billing & Payment
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
