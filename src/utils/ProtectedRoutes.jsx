import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {

    const user = localStorage.getItem("isLogin") 
    user ? console.log("user is correct") : console.log("user is not correct")
    return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes