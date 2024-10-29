/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/dashboard/navbar";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const user = localStorage.getItem("isLogin");
  user ? console.log("user is correct") : console.log("user is not correct");
  return user ? (
    <>
    <div className="px-6">
      <NavBar />
      <Outlet />{" "}
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
