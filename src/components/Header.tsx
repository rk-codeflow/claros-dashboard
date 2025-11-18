import { toggleSidebar } from "../slices/sidebarSlice";
import { useAppDispatch } from "./hooks/hooks";
import { GoBell } from "react-icons/go";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div>
        <h2 className="text-md sm:text-xl md:text-3xl font-bold ">Dashboard</h2>
        <p className="text-md text-gray-600">Welcome back !</p>
      </div>

      <div className="flex gap-x-6">
        <GoBell className="w-6 h-6 cursor-pointer" />
        <FiMenu
          className="w-6 h-6 cursor-pointer block sm:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
    </header>
  );
};

export default Header;
