import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Outlet />
        </div>
    )
}

export default AuthLayout;