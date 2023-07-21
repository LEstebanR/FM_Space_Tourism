import React from "react";
import { Barlow_Condensed, Bellefair } from "next/font/google";

const Barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BellefairF = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  children: React.ReactNode;
}

export const HeaderNum: React.FC<Props> = ({ children }) => (
  <p className={`${Barlow.className} text-base font-bold tracking-widest`}>
    {children}
  </p>
);

export const HeaderLink: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-base uppercase tracking-wide cursor-pointer`}
  >
    {children}
  </p>
);

export const H1: React.FC<Props> = ({ children }) => (
  <h1
    className={`${BellefairF.className} text-8xl uppercase text-secondary sm:text-10xl`}
  >
    {children}
  </h1>
);

export const H5: React.FC<Props> = ({ children }) => (
  <h5
    className={`${Barlow.className} text-2xl text-primary uppercase tracking-wide `}
  >
    {children}
  </h5>
);

export const Body: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-lg text-primary capitalize tracking-wide text-center lg:text-justify`}
  >
    {children}
  </p>
);

export const BodyMenu: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-3xl text-black uppercase tracking-wide`}
  >
    {children}
  </p>
);

export const TitleNumber: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-base md:text-xl text-white opacity-25 uppercase tracking-wide`}
  >
    {children}
  </p>
);

export const Title: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-base md:text-xl text-white  uppercase tracking-wide`}
  >
    {children}
  </p>
);

export const SubHeading: React.FC<Props> = ({ children }) => (
  <p
    className={`${BellefairF.className} text-3xl text-white uppercase text-center tracking-wide`}
  >
    {children}
  </p>
);

export const SubHeading2: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-sm text-white uppercase text-center tracking-wide`}
  >
    {children}
  </p>
);
