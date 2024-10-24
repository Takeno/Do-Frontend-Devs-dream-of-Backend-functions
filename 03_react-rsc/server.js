const register = require("react-server-dom-webpack/node-register");
register();

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const {App} = require("./src/App");
const { readFileSync } = require('node:fs');
const path = require('node:path');
const express = require('express');
const React = require("react");
const app = express();

const manifest = readFileSync(
  path.resolve(__dirname, "./public/react-client-manifest.json"),
  "utf8"
);
const moduleMap = JSON.parse(manifest);

//#region app
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
app.get('/react', (req, res) => {
  const { pipe } = renderToPipeableStream(
    React.createElement(App),
    moduleMap
  );
  pipe(res);
});
//#endregion app


app.use(express.static(path.resolve(__dirname, "./public")));

const port = 3003;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

