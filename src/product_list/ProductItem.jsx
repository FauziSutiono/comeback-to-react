export const ProductItem = ({ name, price, onClick }) => {
  return (
    <>
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={onClick}>Add</button>
    </>
  );
};
