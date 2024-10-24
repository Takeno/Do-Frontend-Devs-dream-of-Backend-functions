import React, {use, useState, useEffect, Suspense} from 'react';

export function Page({product}) {
  return (
    <html>
      <head>
        <title>React SSR Test</title>
      </head>
      <body>
        <div id="root">
          <App product={product} />
        </div>
        <script dangerouslySetInnerHTML={{__html: `window.__PROPS__=${JSON.stringify({product})}`}}></script>
        {/* <script src="/client.js" type="module"></script> */}
      </body>
    </html>
  );
}

//#region app
export const App = ({product}) => (
  <>
    <h1>{product.title}</h1>
    <Suspense fallback={<p>Loading...</p>}>
      <RelatedProducts />
    </Suspense>
  </>
);
//#endregion app


function RelatedProducts() {
  // TODO: use cached promise
  use(new Promise(r => setTimeout(r, 2000)));

  return <ul>{new Array(3).fill(0).map((_, i) => <li key={i}>Product {i + 1}</li>)}</ul>;
}

function Counter () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(interval);
  }, [count]);
  return <div>{count}</div>;
}