import { FaHome, FaDatabase } from "react-icons/fa";
import type { Page } from "./slices/pageSlice";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (p: Page) => void;
  isOpen: boolean;
}

const Sidebar = ({ currentPage, setCurrentPage, isOpen }: SidebarProps) => {
  const links = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
  ];

  return (
    <aside
      className={`
    fixed top-0 left-0 h-full w-60  bg-gray-900 text-white z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    sm:relative sm:translate-x-0
  `}
    >
      {/* Header + Toggle */}
      <div className="p-6 flex items-center justify-between border-b border-gray-700">
        <div>
          <h1 className="text-xl font-bold text-[#00b4ad]">ClarosAnalytics</h1>
          <p className="text-xs text-gray-300 mt-1">Dashboard</p>
        </div>
      </div>

      {/* Overlay */}
      {/* {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )} */}

      {/* Navigation Items */}
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
               ${isActive ? "bg-[#00b4ad] text-black" : "text-white"}
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
