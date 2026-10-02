import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Md. Navidul Hoque | Data Analytics Portfolio",
  description: "CSE graduate focused on data analytics, business intelligence and business problem solving.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
