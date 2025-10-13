import { useRef } from "react";

export const UncontrolledExample = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`input value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
