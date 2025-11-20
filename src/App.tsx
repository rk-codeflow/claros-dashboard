import Home from "./components/home/Home";
import Data from "./components/data";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import { setPage, type Page } from "./slices/pageSlice";
import Header from "./components/home/Header";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports";
import Logout from "./components/Logout";

function App() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((s) => s.page.currentPage);
  const sidebarOpen = useAppSelector((s) => s.sidebar.isOpen);

  return (
    <div className="flex h-full">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={(p: Page) => dispatch(setPage(p))}
        isOpen={sidebarOpen}
      />

      <main className="flex flex-col h-screen overflow-y-auto space-y-3 transition-all duration-300 w-full bg-whitesmoke custom-scrollbar">
        <Header />
        {currentPage === "home" && <Home />}
        {currentPage === "data" && <Data />}
        {currentPage === "analytics" && <Analytics />}
        {currentPage === "reports" && <Reports />}
        {currentPage === "logout" && <Logout />}
      </main>
    </div>
  );
}

export default App;
