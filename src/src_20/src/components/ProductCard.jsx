import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      {/* Product Image */}
      <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />

      {/* Product Name */}
      <h3 className="">{product.name}</h3>

      {/* Price */}
      <p className="">${product.price}</p>

      {/* Views Details Button */}
      <Link to={`product/${product.id}`} className="">
        <button className="">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
