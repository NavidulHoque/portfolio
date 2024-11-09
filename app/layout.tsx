import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This portfolio describes about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
