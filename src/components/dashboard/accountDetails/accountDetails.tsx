import { Route, Routes } from "react-router-dom"
import SideBar from "./sideBar"
import AccountInfo from "./detailsComponent/accountInfo"
import FavorList from "./detailsComponent/favorList"
import OrderHistory from "./detailsComponent/orderHistory"
import Payment from "./detailsComponent/payment"
import Security from "./detailsComponent/security"

const AccountDetails = () => {
  return (
    <div>
        <h1 className='w-full h-full flex text-4xl font-bold p-4 space-x-4'>
            <SideBar />
            <div className="border-2 border-gray-100 rounded-md p-5 w-full h-full shadow-inner">
                <Routes>
                    <Route path="/accountInfo" element={<AccountInfo />} />
                    <Route path="/favorList" element={<FavorList />} />
                    <Route path="/orderHistory" element={<OrderHistory />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/security" element={<Security />} />
                </Routes>
            </div>
        </h1>
    </div>
  )
}

export default AccountDetails