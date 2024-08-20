import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("증가");
    // setCount(count + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  };

  const decrement = () => {
    console.log("감소");
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}
