"use client"

import React from 'react';
import { useRouter } from './Router';

export default function NavigateButton({ to, children }) {
  const { navigate } = useRouter();

  return <button onClick={() => navigate(to)}>{children}</button>;
}
