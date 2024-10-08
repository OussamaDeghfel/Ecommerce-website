import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import StoreList from "./components/store/storeList";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import AccountDetails from "./components/accountDetails/accountDetails";

function App() {
  return (
    <>
    <Provider store={store}>
      <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accountDetails" element={<AccountDetails />} />
          </Routes>
      </div>
      </Provider>
    </>
  );
}

export default App;
