import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Current Theme: {theme}</button>;
};

export { ThemeProvider, ThemedButton };
