import { Outlet } from "react-router"

const AppLayout = () => {
    return (
        <div className="relative flex justify-center items-center w-screen h-screen">
            <Outlet />
        </div>
    )
}

export default AppLayout;