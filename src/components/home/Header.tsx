import { FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";
import { useAppDispatch } from "../hooks/hooks";
import { toggleSidebar } from "../../slices/sidebarSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div>
        <h2 className="text-md sm:text-xl md:text-3xl font-bold ">Dashboard</h2>
        <p className="text-md text-gray-600">Welcome back !</p>
      </div>

      <div className="flex gap-x-8">
        <VscBellDot className="w-[22px] h-[22px] cursor-pointer hover:animate-pulse text-primary" />
        <FaRegUser className="w-5 h-5 cursor-pointer text-primary" />
        <FiMenu
          className="w-6 h-6 cursor-pointer block sm:hidden text-primary"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
    </header>
  );
};

export default Header;
