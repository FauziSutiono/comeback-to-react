import { Product } from "./Product";

export const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} />
        ))}
      </ul>
    </div>
  );
};
