import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartProvider from "@/components/cart/CartProvider";

export const metadata: Metadata = {
  title: {
    default: "Seres Tészta",
    template: "%s | Seres Tészta",
  },
  description: "Seres Tészta – minőségi tészták hagyományos ízekkel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
