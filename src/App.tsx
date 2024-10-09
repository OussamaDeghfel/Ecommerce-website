import "./App.css";
import Auth from "./components/authorization/auth";
// import About from "./components/about";
// import Home from "./components/home";
// import NavBar from "./components/navbar";
// import { Routes, Route } from "react-router-dom";
// import StoreList from "./components/store/storeList";
// import { Provider } from "react-redux";
// import { store } from "./components/redux/store";
// import AccountDetails from "./components/accountDetails/accountDetails";
// import SignIn from "./components/authorization/signin/signIn";

function App() {
  return (
    <>
    <Auth />
    {/* <Provider store={store}>
      <NavBar />
      <div>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/about" element={<About />} />
            <Route path="/accountDetails/*" element={<AccountDetails />} />
          </Routes>
      </div>
      </Provider> */}
    </>
  );
}

export default App;
