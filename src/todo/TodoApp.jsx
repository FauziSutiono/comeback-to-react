import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState(["Learn React", "Write Code"]);

  const addTodo = () => {
    const newTodo = `Task ${todos.length + 1}`;
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <a>{todo}</a>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};
