import Home from "./components/home/Home";
import Data from "./components/data";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import { setPage, type Page } from "./slices/pageSlice";
import Header from "./components/home/Header";

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

      <main className="flex flex-col space-y-6 transition-all duration-300 w-full bg-whitesmoke">
        <Header />
        {currentPage === "home" && <Home />}
        {currentPage === "data" && <Data />}
      </main>
    </div>
  );
}

export default App;
