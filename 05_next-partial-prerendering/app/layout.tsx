import { CartCountProvider } from "#/components/cart-count-context";
import { Header } from "#/components/header";
import { Sidebar } from "#/components/sidebar";
import { Metadata } from "next";
import { GlobalStyles } from "./styles";

export const metadata: Metadata = {
  metadataBase: new URL("https://partialprerendering.com"),
  title: "Next.js Partial Prerendering",
  description: "A demo of Next.js using Partial Prerendering.",
  openGraph: {
    title: "Next.js Partial Prerendering",
    description: "A demo of Next.js using Partial Prerendering.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`[color-scheme:dark]`}>
      <head>
        <GlobalStyles />
      </head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        <div className="mx-auto max-w-4xl px-2 lg:px-8">
          <div className="rounded-lg bg-black p-3.5 lg:p-6">
            <CartCountProvider>
              <div className="space-y-10">
                <Header />

                {children}
              </div>
            </CartCountProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
