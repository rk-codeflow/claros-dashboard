import Home from "./components/Home";
import Data from "./components/Data";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "data">("home");
  return (
    <div className="flex h-screen">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home />}
      {currentPage === "data" && <Data />}
    </div>
  );
}

export default App;
