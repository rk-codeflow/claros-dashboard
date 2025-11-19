export interface ProductList {
  id: number;
  title: string;
  price: number;
  category: {
    name: string;
    image: string;
  };
}

export interface ProductTableProps {
  products: ProductList[];
  loading: boolean;
  error: boolean;
}
