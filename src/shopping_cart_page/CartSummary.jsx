export const CartSummary = ({ total }) => {
  return (
    <>
      <h2>Cart Summary</h2>
      <p>{total.toFixed(2)}</p>
    </>
  );
};
