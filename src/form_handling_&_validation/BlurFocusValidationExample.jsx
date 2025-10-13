import { useState } from "react";

export const BlurFocusValidationExample = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [focusMessage, setFocusMessage] = useState("");

  const handleBlur = () => {
    if (username.trim() === "") {
      setError("username cannot be empty");
    } else {
      setError("");
    }
  };

  const handleFocus = () => {
    setFocusMessage("Enter a valid username (e.g., at least 3 characters).");
  };

  return (
    <form>
      <label>
        Usernam:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} />
      </label>
      {focusMessage && <p style={{ color: "blue" }}>{focusMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
