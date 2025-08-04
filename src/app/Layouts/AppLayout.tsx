import { Outlet, useNavigate } from "react-router"
import WhiteHouseIcon from "@/assets/white_house_icon.svg";

const AppLayout = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/homepage");
    }
    
    return (
        <div className="relative flex justify-center items-center w-screen h-screen">
            <div
                className="absolute top-5 right-5 bg-black rounded-full p-2 cursor-pointer flex items-center justify-center w-[3rem] h-[3rem]"
                onClick={handleHomeClick}
            >
                <img
                    src={WhiteHouseIcon}
                    alt="White House Icon"
                    className="w-full h-full object-contain"
                />
            </div>
            <Outlet />
        </div>
    )
}

export default AppLayout;