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
const cache = new Map();

export function Router() {
  const [location, setLocation] = useState('/');

  let content = cache.get(location);
  if (!content) {
    content = createFromFetch(
      fetch('/react?location=' + encodeURIComponent(location))
    );
    cache.set(location, content);
  }

  function navigate(nextLocation) {
    startTransition(() => {
      setLocation(nextLocation);
    });
  }
  return (
    <RouterContext.Provider value={{location, navigate}}>
      {use(content)}
    </RouterContext.Provider>
  );
}