import React, {useState, Suspense} from 'react';
import { Counter } from './Counter';
import Page1 from './Page1'
import Page2 from './Page2'
import NavigateButton from './NavigateButtonT';

//#region app
export function App({page}) {
  return (
    <>
      <menu>
        <NavigateButton to="page1">Page 1</NavigateButton>
        <NavigateButton to="page2">Page 2</NavigateButton>
      </menu>

      <Suspense fallback={<p>Loading...</p>}>
        {page === 'page1' ? <Page1 /> : <Page2 />}
      </Suspense>
    </>
  );
}
//#endregion app