import { useState } from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <div className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductItem key={product.id} className="product-card" name={product.name} price={product.price} onClick={() => addToCart(product)} />
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
