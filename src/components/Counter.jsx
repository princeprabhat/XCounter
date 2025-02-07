import React, { useState } from "react";

const Counter = () => {
  const [countVal, setCountVal] = useState(0);

  const handleValue = (ops) => {
    if (ops === "Increment") {
      setCountVal((prev) => prev + 1);
    }
    if (ops === "Decrement") {
      setCountVal((prev) => prev - 1);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Counter App</h1>
      <p>Count: {countVal}</p>
      <button onClick={() => handleValue("Increment")}>Increment</button>
      <button onClick={() => handleValue("Decrement")}>Decrement</button>
    </div>
  );
};

export default Counter;
