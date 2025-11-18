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
    fixed top-0 left-0 h-full w-52 bg-gray-900 text-white z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    sm:static sm:translate-x-0
  `}
    >
      {/* Header + Toggle */}
      <div className="p-6 flex items-center justify-between border-b border-gray-700">
        <div>
          <h1 className="text-xl font-bold text-white">ClarosAnalytics</h1>
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
      <nav className="flex flex-col p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              className={`
                flex items-center p-2 rounded
                transition-all duration-200
               ${isActive ? "bg-amber-500 text-black" : "text-white"}

              `}
              onClick={() => setCurrentPage(link.id as Page)}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
