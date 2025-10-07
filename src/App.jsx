// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { LoginForm } from "./form/LoginForm";
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

const App = () => {
  return <LoginForm />;
};
export default App;
