import React from 'react';
import {Counter} from './Counter'

export default async function Page1() {
  await new Promise(r => setTimeout(r, 2000));

  return <><h2>Page 1</h2><Counter /></>
}