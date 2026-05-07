import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment} style={{ margin: "10px" }}>
        Increment
      </button>

      <button onClick={reset} style={{ margin: "10px" }}>
        Reset
      </button>

      <button onClick={decrement} style={{ margin: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;