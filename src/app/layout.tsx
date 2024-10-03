import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Secured from "@/components/secured";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Globalempirefx | Home",
  description: "The Only Global Platform For You",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Header />
        {children}
        <Secured />
        </ClerkProvider>
        </body>
    </html>
  );
}
