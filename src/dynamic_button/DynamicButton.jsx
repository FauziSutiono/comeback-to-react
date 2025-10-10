import { useState } from "react";
import styles from "./Button.module.css";

export const DynamicButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button className={isClicked ? styles.black : styles.white} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? "Clicked" : "Click Me"}
    </button>
  );
};
