import UserDashboard from "./components/UserDashboard";
import user from "./data/user";
import "./styles/index.css";

const App = () => {
  return (
    <div className="center">
      {" "}
      <UserDashboard user={user} />
    </div>
  );
};

export default App;
