import { useState } from "react";

export const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setStrength("Weak");
    } else if (value.length < 10) {
      setStrength("Moderate");
    } else {
      setStrength("Strong");
    }
  };

  return (
    <form>
      <label>
        Password:
        <input type="password" onChange={handleChange} />
      </label>
      <h1>{password}</h1>
      <h1>{strength}</h1>
      {password && <h1 style={{ color: "red" }}>{password}</h1>}
      {strength && <h1 style={{ color: "red" }}>{strength}</h1>}
    </form>
  );
};
