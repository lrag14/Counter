import { useState } from "react";
import "./App.css";
import Reset from "./components/Reset";
import Moreless from "./components/Moreless";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        {count}
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <Reset setCount={setCount} />
    </>
  );
}

export default App;
