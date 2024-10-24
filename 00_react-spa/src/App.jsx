import React, {use, useState, useEffect} from 'react';
//#region app
// App.jsx
export function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct()
      .then((product) => {
        setProduct(product)
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <h1>{product.title}</h1>;
}
//#endregion app

async function fetchProduct() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    title: 'My product',
  }
}