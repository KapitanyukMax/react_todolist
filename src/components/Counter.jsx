import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }
  const reset = () => setCount(0);

  return (
    <>
      <p>Counter: [{count == 0 ? "-" : count}]</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
