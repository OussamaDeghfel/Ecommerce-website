import { ReactNode } from "react"
import { Outlet, Navigate } from "react-router-dom"

interface ProtectedRoutesProps {
    children: ReactNode
}

const ProtectedRoutes:React.FC<ProtectedRoutesProps> = ({children}) => {

    const user = localStorage.getItem("isLogin") 
    user ? console.log("user is correct") : console.log("user is not correct")
    return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes