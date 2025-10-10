import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);
  return <h1>{time.toLocaleTimeString()}</h1>;
};
