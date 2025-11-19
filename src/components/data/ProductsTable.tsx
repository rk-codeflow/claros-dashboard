import type { ProductTableProps } from "./interface";

const ProductsTable = ({ products }: ProductTableProps) => {
  console.log({ products });
  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>Picture</td>
          <td>Title</td>
          <td>Category</td>
          <td>Price</td>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          const {
            id,
            title,
            price,
            category: { name, image },
          } = product;
          return (
            <tr key={id}>
              <td>
                <img src={image} alt={title} className="h-10 w-10 rounded-md" />
              </td>
              <td>{title}</td>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
