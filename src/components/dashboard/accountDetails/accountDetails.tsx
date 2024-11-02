import { Route, Routes } from "react-router-dom";
import SideBar from "./sideBar";
import AccountInfo from "./detailsComponent/accountInfo";
import Payment from "./detailsComponent/payment";
import Security from "./detailsComponent/security";

const AccountDetails = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col md:flex-row sm:justify-center sm:items-center md:justify-start md:items-start text-4xl font-bold p-4 md:space-x-4">
        <div>
          <SideBar />
        </div>
        <div className="border-2 border-gray-100 rounded-md md:p-5 w-full h-full shadow-inner">
          <Routes>
            <Route path="/accountInfo" element={<AccountInfo />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </div>

        
      </div>
    </div>
  );
};

export default AccountDetails;
