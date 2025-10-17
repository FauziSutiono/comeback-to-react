import { useState } from "react";

const UserDashboard = ({ user }) => {
  const [tasks, setTasks] = useState(user.tasks);

  const addTask = () => {
    const newTask = `task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  const removeTasks = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title-header">Welcome, {user.name}!</h1>
        <p className="title-email">Your email: {user.email}</p>
      </header>

      <main className="dashboard">
        <h2 className="title-list">Task List</h2>
        {tasks.length > 0 ? (
          <ul className="ul">
            {tasks.map((tasks, index) => (
              <li className="li" key={index}>
                {tasks}{" "}
                <button onClick={() => removeTasks(index)} style={{ marginLeft: "10px" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available. Add a task to get started!</p>
        )}
        <button onClick={addTask} className="add-task">
          AddTask
        </button>
      </main>
    </div>
  );
};

export default UserDashboard;
