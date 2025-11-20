import { useState } from "react";
import type { ProductTableProps } from "./interface";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "../hooks/useDebounce";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { LuLoader } from "react-icons/lu";
import { TbError404 } from "react-icons/tb";

const ProductsTable = ({ products, loading, error }: ProductTableProps) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(inputValue, 500);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) => {
    const search = debouncedSearch.toLowerCase();
    return (
      product.title.toLowerCase().includes(search) ||
      product.category.name.toLowerCase().includes(search)
    );
  });

  console.log({ filteredProducts });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const itemsToBeDisplayed = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (error)
    return (
      <div className="flex flex-col gap-y-2 items-center justify-center py-6 w-full border border-red-500/25 bg-red-600/20 rounded-2xl">
        <TbError404 className="text-5xl sm:text-9xl lg:text-[100px] text-red-500" />
        <p className="text-red-500 text-sm sm:text-lg">
          Failed to load products. Please try again.
        </p>
      </div>
    );

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative">
        <CiSearch
          fontSize={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors"
        />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search posts by title and category"
          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-white transition-all"
        />
      </div>

      {loading ? (
        <div
          className="bg-white flex flex-col gap-y-4 items-center justify-center py-6 w-full border border-primary-light-1
        "
        >
          <LuLoader className="animate-spin h-8 w-8" />
          <p className="text-muted-foreground font-medium">
            Loading your data ...
          </p>
        </div>
      ) : (
        <>
          <div className="relative flex flex-col w-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table className="table-auto data-table border border-whitesmoke rounded">
              <thead>
                <tr className="font-bold text-sm text-slate-500 border-b border-slate-300 bg-slate-50">
                  <td>Picture</td>
                  <td>Title</td>
                  <td>Category</td>
                  <td>Price</td>
                </tr>
              </thead>

              <tbody className="text-sm bg-white">
                {itemsToBeDisplayed.length > 0 ? (
                  itemsToBeDisplayed.map((product) => {
                    const {
                      id,
                      title,
                      price,
                      category: { name, image },
                    } = product;
                    return (
                      <tr
                        key={id}
                        className="hover:bg-slate-50 even:bg-gray-50"
                      >
                        <td>
                          <img
                            src={image}
                            alt={title}
                            className="h-10 w-10 rounded-md"
                          />
                        </td>
                        <td>{title}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center text-md text-gray-500"
                    >
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4  rounded-xl mb-4">
            <p className="text-sm">Found {filteredProducts.length} results</p>
            <div className="flex gap-x-6">
              <button
                className={`btn ${currentPage === 1 ? "disabled" : "active"}`}
                onClick={goToPrev}
                disabled={currentPage === 1}
              >
                <GrFormPreviousLink />
                Previous
              </button>

              <button
                className={`btn ${
                  currentPage === totalPages ? "disabled" : "active"
                }`}
                onClick={goToNext}
                disabled={currentPage === totalPages}
              >
                {" "}
                Next
                <GrFormNextLink />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsTable;
