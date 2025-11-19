import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProductsTable from "./ProductsTable";
import type { ProductList } from "./interface";

const Data = () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLists = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log({ data });
      setProducts(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="flex flex-col h-screen space-y-10 padding">
      <div>
        <h3 className="text-md sm:text-lg md:text-2xl font-bold">Data Table</h3>
        <p className="text-sm text-gray-600">View the details of data</p>
      </div>

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
            placeholder="Search posts by title"
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {loading ? <p>Loading</p> : <ProductsTable products={products} />}
      </div>
    </div>
  );
};

export default Data;
