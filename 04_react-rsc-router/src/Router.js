"use client";
import React, {
  createContext,
  startTransition,
  useContext,
  useState,
  useMemo,
  use,
} from 'react';
import {createFromFetch, createFromReadableStream} from 'react-server-dom-webpack/client';

const RouterContext = createContext();

//#region app
const cache = new Map();
export function Router() {
  const [location, setLocation] = useState('page1');

  let content = cache.get(location);
  if (!content) {
    content = createFromFetch(
      fetch('/react?location=' + location)
    );
    cache.set(location, content);
  }

  function navigate(nextLocation) {
    startTransition(() => { setLocation(nextLocation); cache.delete(location); });
  }
  return (
    <RouterContext.Provider value={{location, navigate}}>
      {use(content)}
    </RouterContext.Provider>
  );
}
//#endregion app

export function useRouter() {
  return useContext(RouterContext);
}