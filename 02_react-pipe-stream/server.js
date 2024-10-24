require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const {App} = require("./App.jsx");
const React = require("react");
const app = express();

// #region app
app.get('/', async (req, res) => {
  const product = await fetchProduct();

  const { pipe } = ReactDOMServer.renderToPipeableStream(
    React.createElement(App, {product}),
    {
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      }
    }
  );
});
// #endregion app

app.use(express.static(path.resolve(__dirname, "./dist")));

const port = 3002;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


async function fetchProduct() {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    title: 'My product',
  }
}