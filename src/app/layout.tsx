"use client";

import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let background;

  switch (pathname) {
    case "/":
      background = "bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop";
      break;
    case "/destination":
      background =
        "bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop";
      break;
    case "/crew":
      background = "bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop";
      break;
    case "/technology":
      background =
        "bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop";
      break;
  }

  return (
    <html lang="en" className="h-screen" title="Space Tourism">
      <title>Space Tourism</title>
      <body
        className={`${inter.className} flex flex-col h-screen  overflow-hidden bg-cover bg-no-repeat ${background}`}
      >
        <Header />
        <div className="flex-1 overflow-y-auto flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
