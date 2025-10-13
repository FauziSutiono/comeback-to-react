import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import ProductDetailsPage from "./src/pages/ProductDetailsPage";
import CartPage from "./src/pages/CartPage";
import CheckoutPage from "./src/pages/CheckoutPage";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);
export default App;
