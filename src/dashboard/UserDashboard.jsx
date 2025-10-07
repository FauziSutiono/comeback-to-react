import { useState } from "react";

export const UserDashboard = ({ user }) => {
  const [tasks, setTasks] = useState(user.tasks);

  const addTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <header style={{ textAlign: "center", color: "blue", margin: "20px 0" }}>
        <h1>Welcome, {user.name}!</h1>
        <p>Your email: {user.email}</p>
      </header>

      <main className="dashboard">
        <h2>Task List</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{" "}
                <button onClick={() => removeTask(index)} style={{ marginLeft: "10px" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available. Add a task to get started!</p>
        )}
        <butto onClick={addTask} className="add-task">
          Add Task
        </butto>
      </main>
    </>
  );
};
