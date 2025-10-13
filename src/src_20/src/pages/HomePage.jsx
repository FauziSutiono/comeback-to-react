import products from "../data/product";
import ProductCard from "../components/ProductCard";
// import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <h1 className="">Products</h1>
      {/* Responsive Grid: Max 2 items per row */}
      <div className="">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
