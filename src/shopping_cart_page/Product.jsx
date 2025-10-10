export const Product = ({ name, price, key }) => {
  return (
    <div key={key}>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
};
