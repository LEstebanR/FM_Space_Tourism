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

  console.log(pathname);

  switch (pathname) {
    case "/":
      background = "bg-home-mobile sm:bg-home-tablet md:bg-home-desktop";
      break;
    case "/destination":
      background =
        "bg-destination-mobile sm:bg-destination-tablet md:bg-destination-desktop";
      break;
    case "/crew":
      background = "bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop";
      break;
    case "/technology":
      background =
        "bg-technology-mobile sm:bg-technology-tablet md:bg-technology-desktop";
  }

  console.log(background);

  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white ${background}   bg-cover  bg-no-repeat`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
