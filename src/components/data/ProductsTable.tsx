import { useState } from "react";
import type { ProductTableProps } from "./interface";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "../hooks/useDebounce";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const ProductsTable = ({ products }: ProductTableProps) => {
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

  const totalPage = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToBeDisplayed = filteredProducts.slice(startIndex, endIndex);
  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const goToNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
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

      <div className="relative flex flex-col w-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="table-fixed data-table border border-whitesmoke rounded">
          <thead>
            <tr className="font-bold text-sm text-slate-500 border-b border-slate-300 bg-slate-50">
              <td>Picture</td>
              <td>Title</td>
              <td>Category</td>
              <td>Price</td>
            </tr>
          </thead>

          <tbody className="text-sm bg-white">
            {filteredProducts.length > 0 ? (
              itemsToBeDisplayed.map((product) => {
                const {
                  id,
                  title,
                  price,
                  category: { name, image },
                } = product;
                return (
                  <tr key={id} className="hover:bg-slate-50 even:bg-gray-50">
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
                <td colSpan={4} className="text-center text-xl">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-4 bg-white padding rounded-xl mb-4">
        <button
          className="btn disabled:bg-gray-300"
          onClick={goToPrev}
          disabled={currentPage === 1}
        >
          <GrFormPreviousLink />
          Previous
        </button>
        <button
          className="btn disabled:bg-gray-300"
          onClick={goToNext}
          disabled={currentPage === totalPage}
        >
          {" "}
          Next
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
