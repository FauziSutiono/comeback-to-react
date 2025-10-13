import { useState } from "react";

export const BasicValidation = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (username.length < 3) {
      setError("username must be at least 3 characters long. ");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <h1>{username}</h1>
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      <button type="submit">Submit</button>
    </form>
  );
};
