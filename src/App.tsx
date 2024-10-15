import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/authorization/auth";
// import Dashboard from "./components/dashboard/dashboard";
// import SignIn from "./components/authorization/signin/signIn";
// import SignUp from "./components/authorization/signup/signUp";
import Home from "./components/dashboard/home";
import About from "./components/dashboard/about";
import StoreList from "./components/store/storeList";
import AccountDetails from "./components/dashboard/accountDetails/accountDetails";
import NavBar from "./components/dashboard/navbar";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <>
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
