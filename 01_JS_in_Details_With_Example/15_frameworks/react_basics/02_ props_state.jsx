import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{props.title}</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}