import type { ProductTableProps } from "./interface";

const ProductsTable = ({ products }: ProductTableProps) => {
  console.log({ products });
  return (
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

        <tbody className="text-sm bg-white ">
          {products.map((product) => {
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
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
