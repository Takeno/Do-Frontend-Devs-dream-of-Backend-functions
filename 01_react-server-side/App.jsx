import React, {useEffect, useState} from 'react';

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
        <template id="props"></template>
        <script src="/client.js" type="module"></script>
      </body>
    </html>
  );
}

//#region app
export function App({product}) {
  const [clientProduct, setProduct] = useState(product);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProduct()
      .then((product) => {
        setProduct(product)
        setLoading(false)
      });
  }, [clientProduct])

  return (<>
    <h1>{clientProduct.title}</h1>
    <Counter />
  </>);
}
//#endregion app

function Counter () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(interval);
  }, [count]);
  return <div>{count}</div>;
}

async function fetchProduct() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    title: 'My product',
  }
}