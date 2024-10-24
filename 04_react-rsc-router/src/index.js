import React, { use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";
import { createRoot } from "react-dom/client";
import {Router} from './Router'

const root = createRoot(document.getElementById("root"));
root.render(<Router />);