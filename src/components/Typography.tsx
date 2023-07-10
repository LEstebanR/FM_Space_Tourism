import React from "react";
import { Barlow_Condensed } from "next/font/google";

const HeaderFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  children: React.ReactNode;
}

export const HeaderNum: React.FC<Props> = ({ children }) => (
  <p className={`${HeaderFont.className} text-base font-bold tracking-widest`}>
    {children}
  </p>
);

export const HeaderLink: React.FC<Props> = ({ children }) => (
  <p className={`${HeaderFont.className} text-base uppercase tracking-wide`}>
    {children}
  </p>
);
