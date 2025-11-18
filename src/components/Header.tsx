import { toggleSidebar } from "../slices/sidebarSlice";
import { useAppDispatch } from "./hooks/hooks";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="flex justify-between">
      <div className="flex">🔔 🤦‍♀️</div>
      <button
        className="block sm:hidden p-4 text-white bg-[#121417]"
        onClick={() => dispatch(toggleSidebar())}
        aria-label="Open menu"
      >
        <FaBars className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;
