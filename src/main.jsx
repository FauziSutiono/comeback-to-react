// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { Provider } from "react-redux";
// import store from "./shopping_cart_with_redux_toolkit/store/store";
// import App from "./App";
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import { Provider } from "react-redux";
import store from "./src_20/src/redux/store";
import App from "./src_20/App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
