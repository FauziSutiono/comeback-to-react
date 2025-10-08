import { ProductList } from "./ProductList";

export const ShoppingCartPage = () => {
  const products = [
    { id: 1, name: "Milk", price: 5 },
    { id: 2, name: "Egg", price: 8 },
  ];

  return <ProductList products={products} />;
};
