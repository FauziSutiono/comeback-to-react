// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";

// import { LoginForm } from "./form/LoginForm";

// import { UserList } from "./components/UserList";
// import { UserDashboard } from "./dashboard/UserDashboard";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
//   ]);

//   const toggleUserActivity = (id) => {
//     setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, isActive: !user.isActive } : user)));
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <UserList users={users} toggleActivity={toggleUserActivity} />
//     </div>
//   );
// };

// const App = () => {
//   const user = {
//     name: "Alice Doe",
//     email: "alice@example.com",
//     tasks: ["Buy groceries", "Finish React project"],
//   };
//   return <UserDashboard user={user} />;
// };

// const App = () => {
//   return <LoginForm />;
// };

// const NumberList = ({ numbers }) => {
//   // const NumberList = (props) => {
//   // const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) => (
//         <li style={{ listStyleType: "none" }} key={number}>
//           <h1>{number}</h1>
//         </li>
//       ))}
//     </ul>
//   );
// };

// import { users } from "./dummy_user/users";
// import { UserList } from "./dummy_user/UserList";

// import { TodoApp } from "./todo/TodoApp";

// import { CategoryList } from "./nested_list/CategoryList";
// import { RecursiveCategory } from "./nested_list_2/RecursiveCategory";
// import { nestedCategories } from "./nested_list_2/nestedCategories";

// import { LazyLoading } from "./lazy_loading/LazyLoading";
// import { VirtualizedList } from "./lazy_loading/VirtualizedList";

// import { ProductList } from "./product_list/ProductList";
// import { ShoppingCartPage } from "./product_list/ShoppingCartPage";

// import { ShoppingCart } from "./shopping_cart_page/ShoppingCart";

// import { DynamicButton } from "./dynamic_button/DynamicButton";
// import { Timer } from "./timer_component/Timer";
// import { ShoppingCart } from "./shopping_cart_with_redux_toolkit/ShoppingCart";

// import { ThemedButton, ThemeProvider } from "./context_API/ThemeProvider";
// import { ControlledExample } from "./form_handling_&_validation/ControlledExample";
// import { UncontrolledExample } from "./form_handling_&_validation/UncontrolledExample";
// import { BlurFocusValidationExample } from "./form_handling_&_validation/BlurFocusValidationExample";
// import { EventObjectExample } from "./form_handling_&_validation/EventObjectExample";
// import { BasicValidation } from "./form_handling_&_validation/BasicValidation";
// import { PasswordStrength } from "./form_handling_&_validation/PasswordStrength";
// import { CheckoutForm } from "./form_handling_&_validation/CheckoutForm";

// import { AppProduct } from "./routing/ProductDetails";
// import { BlogApp } from "./routing/BlogApp";
// import { BrowserRouter } from "react-router-dom";
// import { Security } from "./security/Security";
import { MaskedInput } from "./security/MaskedInput";
import FetchExample from "./api/FetchExample";
const App = () => {
  return <FetchExample />;
};

export default App;
