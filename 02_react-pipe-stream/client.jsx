import React from 'react';
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

//#region app
const root = hydrateRoot(
  document.getElementById('root'),
  <App product={window.__PROPS__.product} />
);
//#endregion app