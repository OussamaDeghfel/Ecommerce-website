/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/dashboard/navbar/navBar";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = () => {
  const user = localStorage.getItem("isLogin");
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
