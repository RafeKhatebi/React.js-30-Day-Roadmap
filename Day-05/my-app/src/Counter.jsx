import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Handler functions for button clicks
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ margin: 20 }}>
      <h2>Counter: {count}</h2>
      <button onClick={decrement} style={{ marginRight: 10 }}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
