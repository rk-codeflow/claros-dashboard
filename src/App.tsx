import Home from "./components/Home";
import Data from "./components/Data";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import { setPage, type Page } from "./slices/pageSlice";

function App() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((s) => s.page.currentPage);
  const sidebarOpen = useAppSelector((s) => s.sidebar.isOpen);

  return (
    <div className="flex h-screen">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={(p: Page) => dispatch(setPage(p))}
        isOpen={sidebarOpen}
      />

      <main className="p-5 min-h-screen flex flex-col transition-all duration-300 w-full">
        {currentPage === "home" && <Home />}
        {currentPage === "data" && <Data />}
      </main>
    </div>
  );
}

export default App;
