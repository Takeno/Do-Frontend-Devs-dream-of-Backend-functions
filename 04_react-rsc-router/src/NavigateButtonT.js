"use client"

import React, { useTransition } from 'react';
import { useRouter } from './Router';

export default function NavigateButtonT({ to, children }) {
  const [isPending, startTransition] = useTransition();
  const { navigate } = useRouter();


  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => navigate(to))}>
        {children}
    </button>
  );
}