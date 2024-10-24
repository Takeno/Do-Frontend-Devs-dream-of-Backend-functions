import React, {useState, Suspense} from 'react';
import { Counter } from './Counter';

export function App() {
  return (
    <>
      <h1>Hello from React SSR!</h1>
      <p>This page was rendered using renderToPipeableStream.</p>

      <Test />
      <Counter />
    </>
  );
}


async function Test() {
  await new Promise(r => setTimeout(r, 3000));

  return <h1>Finished</h1>
}