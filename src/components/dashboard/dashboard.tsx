import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import StoreList from "../store/storeList";
import AccountDetails from "./accountDetails/accountDetails";
import NavBar from "./navbar";

const Dashboard = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/store" element={<StoreList />} />
        <Route path="/dashboard/accountDetails/*" element={<AccountDetails />} />
      </Routes>
    </>
  );
};

export default Dashboard;
