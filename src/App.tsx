import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import StoreList from "./components/store/storeList";

function App() {
  return (
    <>
      <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<StoreList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
