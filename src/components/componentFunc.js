import React, { Component, useState } from "react";

export default function HelloWorld() {
  return (
    <div>
      <Hello value={"sachin"} />
    </div>
  );
}

export function Hello({ value }) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div>
      hello New World {value}
      <div>count value {count}</div>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Increment
      </button>
      <button onClick={() => setCount1(count1 + 1)} className="btn btn-primary">
        Increment
      </button>
      {count1}
    </div>
  );
}
