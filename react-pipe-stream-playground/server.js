const register = require("react-server-dom-webpack/node-register");
register();

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const ReactApp = require("./src/App").App;
const { readFileSync } = require('node:fs');
const path = require('node:path');
const express = require('express');
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
const React = require("react");
const app = express();
const port = 3000;

app.get('/react', (req, res) => {
  const manifest = readFileSync(
    path.resolve(__dirname, "./public/react-client-manifest.json"),
    "utf8"
  );
  const moduleMap = JSON.parse(manifest);
  const { pipe } = renderToPipeableStream(
    React.createElement(ReactApp),
    moduleMap
  );
  pipe(res);
});


app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

