import { useState } from "react";

export const ControlledExample = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <h1>{username}</h1>
    </form>
  );
};
