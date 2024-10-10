import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/authorization/auth";
import Dashboard from "./components/dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <>
      <Auth />

      <div>
        <Routes>
          <Route path="/login" element={<Auth />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard/" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
