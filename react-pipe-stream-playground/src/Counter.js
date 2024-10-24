"use client";
import React, {useState} from 'react';

export function Counter(props) {
  const [counter, setCounter] = useState(0);

  console.log(props.children);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <div>
       {props.children}
      </div>
    </>
  );
}