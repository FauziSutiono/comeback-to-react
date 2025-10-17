import { useState } from "react";
import UserList from "./components/UserList";
import "./styles/index.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
    { id: 3, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 4, name: "Jane Smith", email: "jane@example.com", isActive: false },
    { id: 5, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 6, name: "Jane Smith", email: "jane@example.com", isActive: false },
    { id: 7, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 8, name: "Jane Smith", email: "jane@example.com", isActive: false },
  ]);

  const toggleUserActivity = (id) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, isActive: !user.isActive } : user)));
  };

  return <UserList users={users} toggleActivity={toggleUserActivity} />;
};

export default App;
