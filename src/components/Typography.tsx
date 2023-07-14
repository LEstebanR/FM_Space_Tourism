import React from "react";
import { Barlow_Condensed, Bellefair } from "next/font/google";

const HeaderFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const H1Font = Bellefair({
  subsets: ["latin"],
  weight: "400",
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

export const H1: React.FC<Props> = ({ children }) => (
  <h1
    className={`${H1Font.className} text-8xl uppercase text-secondary sm:text-10xl`}
  >
    {children}
  </h1>
);

export const H5: React.FC<Props> = ({ children }) => (
  <h5
    className={`${HeaderFont.className} text-2xl text-primary uppercase tracking-wide `}
  >
    {children}
  </h5>
);

export const Body: React.FC<Props> = ({ children }) => (
  <p
    className={`${HeaderFont.className} text-lg text-primary capitalize tracking-wide text-center lg:text-justify`}
  >
    {children}
  </p>
);

export const BodyMenu: React.FC<Props> = ({ children }) => (
  <p
    className={`${HeaderFont.className} text-3xl text-black uppercase tracking-wide`}
  >
    {children}
  </p>
);
