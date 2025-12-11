import React, { Suspense } from "react";

const Home = React.lazy(() => import("./components/home/Home"));
const Data = React.lazy(() => import("./components/data"));
const Analytics = React.lazy(() => import("./components/Analytics"));
const Reports = React.lazy(() => import("./components/Reports"));
const Logout = React.lazy(() => import("./components/Logout"));

import Sidebar from "./Sidebar";
import Header from "./components/home/Header";

import { useAppDispatch, useAppSelector } from "./components/hooks/hooks";
import { setPage, type Page } from "./slices/pageSlice";
import Loading from "./components/common/Loading";

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
        <Suspense fallback={<Loading />}>
          {currentPage === "home" && <Home />}
          {currentPage === "data" && <Data />}
          {currentPage === "analytics" && <Analytics />}
          {currentPage === "reports" && <Reports />}
          {currentPage === "logout" && <Logout />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
