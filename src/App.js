import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    setCount(count - 1);
  };
  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: "400px" }}>
      <button onClick={handleInc}>+</button>
      <h5>Count : {count}</h5>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default App;
