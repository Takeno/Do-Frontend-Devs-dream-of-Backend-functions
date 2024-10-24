import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'

//#region app
// main.jsx
const root = createRoot(document.getElementById('root'))
root.render(<App />);
//#endregion app