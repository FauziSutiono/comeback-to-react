import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-form-container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <h2 style={{ color: "yellow" }}>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
          </label>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
    </div>
  );
};
