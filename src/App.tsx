import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Store from "./components/store";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
