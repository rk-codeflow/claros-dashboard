import { useState, useEffect } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaHome, FaDatabase } from "react-icons/fa";
import type { Page } from "./slices/pageSlice";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (p: Page) => void;
  isOpen:
}

const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Collapse on mobile, expand on desktop
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsExpanded(!media.matches); // mobile = false, desktop = true
    };

    handleChange(); // run on load
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const links = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
  ];

  return (
    <aside
      className={`
        ${isExpanded ? "w-64" : "w-20"}
        bg-[#121417]
        flex flex-col
        transition-all duration-300
        border-r border-gray-800
        h-screen
      `}
    >
      {/* Header + Toggle */}
      <div className="p-6 flex items-center justify-between border-b border-gray-700">
        {isExpanded && (
          <div>
            <h1 className="text-xl font-bold text-white">ClarosAnalytics</h1>
            <p className="text-xs text-gray-300 mt-1">Dashboard</p>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-700 rounded-lg text-white"
        >
          <IoChevronDownSharp
            className={`w-5 h-5 transition-transform ${
              !isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`
                flex items-center p-2 rounded
                transition-all duration-200
                ${isExpanded ? "gap-4" : "justify-center"}
                ${
                  currentPage === link.id
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {isExpanded && <span>{link.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
