"use client";

import { CartProvider } from "@/context/cart-context";
import { FirebaseClientProvider }from "@/firebase/client-provider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FirebaseClientProvider>
      <CartProvider>{children}</CartProvider>
    </FirebaseClientProvider>
  );
}
