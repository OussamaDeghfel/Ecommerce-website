import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/authorization/auth";
import Home from "./components/dashboard/home";
import About from "./components/dashboard/about";
import StoreList from "./components/dashboard/store/storeList";
import AccountDetails from "./components/dashboard/accountDetails/accountDetails";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <>
      {/* <div className="bg-gradient-to-r from-orange-100 from-20% via-orange-200 via-30% to-orange-200 to-90% px-8"> */}
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route element={<ProtectedRoutes children={undefined} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/accountDetails/*" element={<AccountDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
