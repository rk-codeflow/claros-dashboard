import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  const links = [
    { id: "home", label: "Overview", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
  ];

  return (
    <div className="flex h-screen">
      <aside
        className={`${
          isExpanded ? "w-64" : "w-"
        } bg-[#121417] flex flex-col space-y-2`}
      >
        <div className="p-6 border-b border-sidebar-border/50 flex items-center justify-between">
          {isExpanded && (
            <div>
              <h1 className="text-xl font-bold  text-white">ClarosAnalytics</h1>
              <p className="text-xs text-white mt-1">Dashboard</p>
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

        <nav className="flex flex-col space-y-2 p-6">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <div
                className="flex items-center gap-4 p-2 rounded hover:bg-gray-700 cursor-pointer"
                key={link.id}
              >
                <Icon className="w-5 h-5 text-white" />
                {isExpanded && <p className="text-white">{link.label}</p>}
              </div>
            );
          })}
        </nav>
      </aside>
      <div className="content">content</div>
    </div>
  );
}

export default App;
