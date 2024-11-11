import { Tooltip } from "antd";
import { useState } from "react";
import { FaFolderClosed, FaFolderOpen, FaLock, FaLockOpen, FaMoneyBill, FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [choosedDetail, setChoosedDetail] = useState(0);
  return (
    <>
      <div className="hidden md:flex">
        <ul className="flex flex-col h-fit w-[35vh] space-y-5">
          <Link to="accountInfo">
            <li
              className={`text-sm p-4 shadow-sm flex justify-start items-center space-x-2 rounded-md cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 0 ? "bg-gray-200" : ""
              }`}
              onClick={() => setChoosedDetail(0)}
            >
              {choosedDetail == 0 ? <FaFolderOpen /> : <FaFolderClosed />}  <span> Account Information  </span>
            </li>
          </Link>
          <Link to="security">
            <li
              className={`text-sm p-4 shadow-sm rounded-md flex justify-start items-center space-x-2 cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 1 ? "bg-gray-200" : ""
              }`}
              onClick={() => setChoosedDetail(1)}
            >
              
              {choosedDetail == 1 ? <FaLockOpen /> : <FaLock />} <span> Security  </span>
            </li>
          </Link>
          <Link to="payment">
            <li
              className={`text-sm p-4 flex justify-start space-x-2 items-center shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 2 ? "bg-gray-200" : ""
              }`}
              onClick={() => setChoosedDetail(2)}
            >
              {choosedDetail == 2 ? <FaMoneyBill1Wave /> : <FaMoneyBill />}<span> Billing & Payment  </span> 
            </li>
          </Link>
        </ul>
      </div>

      {/* fixed bottom-0 rounded-t-md justify-center items-center bg-orange-300 py-2 shadow-gray-950 flex w-full */}

      <div className="md:hidden bg-orange-200 py-2 mb-2 rounded-b-md">
        <ul className="flex h-fit space-x-14 justify-center items-center ">
          <Link to="accountInfo">
            <li
              className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 0 ? "bg-orange-100" : ""
              }`}
              onClick={() => setChoosedDetail(0)}
            >
              <Tooltip placement="bottom" title="Account Information">
                
                {choosedDetail == 0 ? <FaFolderOpen /> : <FaFolderClosed />}
              </Tooltip>
            </li>
          </Link>
          <Link to="security">
            <li
              className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 1 ? "bg-orange-100" : ""
              }`}
              onClick={() => setChoosedDetail(1)}
            >
              <Tooltip placement="bottom" title="Security">
                
                {choosedDetail == 1 ? <FaLockOpen /> : <FaLock />}
              </Tooltip>
            </li>
          </Link>
          <Link to="payment">
            <li
              className={`text-xl p-4 shadow-sm rounded-md cursor-pointer hover:scale-105 duration-300 ${
                choosedDetail === 2 ? "bg-orange-100" : ""
              }`}
              onClick={() => setChoosedDetail(2)}
            >
              <Tooltip placement="bottom" title="Billing & Payment">
                {choosedDetail == 2 ? <FaMoneyBill1Wave /> : <FaMoneyBill />}
              </Tooltip>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
