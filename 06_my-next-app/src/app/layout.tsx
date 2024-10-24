import { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({children}: PropsWithChildren<never>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
