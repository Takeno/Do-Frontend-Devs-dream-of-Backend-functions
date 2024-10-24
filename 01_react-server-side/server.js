require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const {Page} = require("./App.jsx");
const React = require("react");
const app = express();

// #region app
app.get('/', async (req, res) => {
  const product = await fetchProduct();
  let output = ReactDOMServer.renderToString(
    React.createElement(Page, {product})
  );

  output = output.replace(`<template id="props"></template>`, `<script>window.__PROPS__=${JSON.stringify({product})}</script>`);

  res.send(output);
});
// #endregion app

app.use(express.static(path.resolve(__dirname, "./dist")));

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

async function fetchProduct() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    title: 'My product',
  }
}