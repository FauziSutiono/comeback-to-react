export const EventObjectExample = () => {
  const handleClick = (e) => {
    console.log(`Event Type: ${e.type}`);
    console.log(`Target Value: ${e.target.value}`);
  };

  return <button onClick={handleClick}>Click Me</button>;
};
