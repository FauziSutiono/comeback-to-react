import { CartSummary } from "./CartSummary";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

export const ShoppingCart = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <Header />
      <ProductList products={products} />
      <CartSummary total={total} />
    </>
  );
};
