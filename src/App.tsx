import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/authorization/auth";
// import ProtectedRoutes from "./utils/ProtectedRoutes";
// import Home from "./components/dashboard/home";
// import About from "./components/dashboard/about";
// import StoreList from "./components/store/storeList";
// import AccountDetails from "./components/dashboard/accountDetails/accountDetails";
// import { Provider } from "react-redux";
// import { store } from "./components/redux/store";
// import NavBar from "./components/dashboard/navbar";

function App() {
  return (
    <>
      {/* <Auth /> */}

      <div>
        <Routes>
          <Route path="/*" element={<Auth />} />
          {/* <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/accountDetails/*" element={<AccountDetails />} />
          </Route> */}
        </Routes>
      </div>

      {/* <div>
            <NavBar />
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/accountDetails/*" element={<AccountDetails />} />
          </Routes>
        </Provider>
      </div> */}
    </>
  );
}

export default App;
