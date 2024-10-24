import React, {useState, Suspense} from 'react';
import { Counter } from './Counter';
import Page1 from './Page1';
import Page2 from './Page2';

export function App({page}) {
  return (
    <>
      <h1>Hello from React SSR!</h1>
      <p>This page was rendered using renderToPipeableStream.</p>

      {page === 'page1' ? <Page1 /> : <Page2 />}
    </>
  );
}


async function Test() {
  await new Promise(r => setTimeout(r, 3000));

  return <h1>Finished</h1>
}