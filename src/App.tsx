import Home from "./components/Home";
import Data from "./components/Data";
import { useEffect, useState } from "react";
import { FaHome, FaDatabase } from "react-icons/fa";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "data">("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile viewport
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const links = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "data", label: "Data", icon: FaDatabase },
  ];
  return (
    <div className="flex h-screen">
      <aside
        className={`
          bg-black
              w-52
             flex flex-col
             transition-all duration-300
             h-screen
             ${
               isMobile
                 ? `fixed z-50 transform ${
                     sidebarOpen ? "translate-x-0" : "-translate-x-52"
                   }`
                 : "relative"
             }
           `}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          <div>
            <h1 className="text-xl font-bold text-white">ClarosAnalytics</h1>
            <p className="text-xs text-gray-300 mt-1">Dashboard</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <button
                key={link.id}
                // onClick={() => setCurrentPage(link.id)}
                className={`
                     flex gap-x-4 items-center p-2 rounded
                     transition-all duration-200
                     ${
                       currentPage === link.id
                         ? "bg-gray-700 text-white"
                         : "text-gray-300 hover:bg-gray-700"
                     }
                   `}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <main
        className={`
           p-5 min-h-screen flex flex-col transition-all duration-300
          ${isMobile ? "w-full" : "w-[calc(100%-208px)]"}
        `}
      >
        {currentPage === "home" && <Home />}
        {currentPage === "data" && <Data />}
      </main>
    </div>
  );
}

export default App;
