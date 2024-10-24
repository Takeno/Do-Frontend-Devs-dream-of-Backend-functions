import React, { Suspense } from 'react';
import { Counter } from './Counter';

//#region app
export async function App() {
  const product = await fetchProduct();

  return (
    <>
      <h1>{product.title}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <RelatedProducts />
      </Suspense>
    </>
  );
}
//#endregion app

async function fetchProduct() {
  return {
    title: 'My product',
  }
}

async function RelatedProducts() {
  await new Promise(r => setTimeout(r, 2000));

  return <ul>{new Array(3).fill(0).map((_, i) => <li key={i}>Product {i + 1}</li>)}</ul>;
}