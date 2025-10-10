import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItemQuantity } from "./store/cartSlice";

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: "New Product",
      quantity: 1,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};
