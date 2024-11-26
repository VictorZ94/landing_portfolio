// @packages
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// @styles
import "./globals.css";

// @components
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Zuluaga Landing Page",
  description: "Landing page made by Victor Zuluaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
