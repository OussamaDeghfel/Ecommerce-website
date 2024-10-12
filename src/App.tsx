import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/authorization/auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Dashboard from "./components/dashboard/dashboard";
// import { Provider } from "react-redux";
// import { store } from "./components/redux/store";
// import NavBar from "./components/dashboard/navbar";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
