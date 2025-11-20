import { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable";
import type { ProductList } from "./interface";

const Data = () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const [products, setProducts] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchLists = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div className="flex flex-col h-screen  space-y-10 padding">
      <div>
        <h3 className="text-md sm:text-lg md:text-2xl font-bold">Data Table</h3>
        <p className="text-sm text-gray-600">View the details of data</p>
      </div>

      <ProductsTable products={products} loading={loading} error={error} />
    </div>
  );
};

export default Data;
