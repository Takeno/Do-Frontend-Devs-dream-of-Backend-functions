import React, { use, Suspense } from "react";
import { createRoot } from "react-dom/client";

//#region app
const root = createRoot(document.getElementById("root"));
root.render(<Root />);

import { createFromFetch } from "react-server-dom-webpack/client";
const cache = new Map();
function Root() {
  let content = cache.get("home");
  if (!content) {
    content = createFromFetch(fetch("/react"));
    cache.set("home", content);
  }
  return <>{use(content)}</>;
}
//#endregion app