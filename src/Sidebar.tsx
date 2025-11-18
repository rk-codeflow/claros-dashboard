import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: "home" | "data") => void;
}
const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const links = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
  ];
  return (
    <aside
      className={`${
        isExpanded ? "w-64" : "w-24"
      } bg-[#121417] flex flex-col space-y-2`}
    >
      <div className="p-6 border-b border-sidebar-border/50 flex items-center justify-between">
        {isExpanded && (
          <div>
            <h1 className="text-xl font-bold  text-[#00B4AD]">
              ClarosAnalytics
            </h1>
            <p className="text-xs text-gray-300 mt-1">Dashboard</p>
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-sidebar-accent rounded-lg text-white"
        >
          <IoChevronDownSharp
            className={`w-4 h-4 transition-transform ${
              !isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      <nav className="flex flex-col space-y-4 p-6">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setCurrentPage?.(link.id as "home" | "data")}
              className={`flex items-center px-4 py-3 rounded-lg cursor-pointer ${
                isExpanded ? "gap-4" : "justify-center"
              } ${isActive ? "bg-[#00B4AD] text-black" : "text-white"}`}
            >
              <Icon className="w-5 h-5" />
              {isExpanded && <p>{link.label}</p>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
