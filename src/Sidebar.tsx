import type { Page } from "./slices/pageSlice";
import { FaHome, FaDatabase } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (p: Page) => void;
  isOpen: boolean;
}

const Sidebar = ({ currentPage, setCurrentPage, isOpen }: SidebarProps) => {
  const links = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
    { id: "analytics", label: "Analytics", icon: TbBrandGoogleAnalytics },
    { id: "reports", label: "Reports", icon: FaChartPie },
    { id: "logout", label: "Log out", icon: MdLogout },
  ];

  return (
    <aside
      className={`
    fixed top-0 left-0 h-screen w-60  bg-gray-900 text-white z-50
    transform transition-transform duration-800
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    sm:relative sm:translate-x-0
  `}
    >
      <div className="p-6 flex items-center justify-between border-b border-gray-700">
        <div>
          <h1 className="text-xl font-bold text-primary">ClarosAnalytics</h1>
          <p className="text-xs text-gray-300 mt-1">Dashboard</p>
        </div>
      </div>

      <nav className="flex flex-col p-4 space-y-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              className={`
                cursor-pointer
                hover:translate-x-1 transition-all duration-300
                flex gap-x-4 items-center py-3 px-4 rounded-md
               ${isActive ? "bg-primary text-black" : "text-white"}
              `}
              onClick={() => setCurrentPage(link.id as Page)}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{link.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
