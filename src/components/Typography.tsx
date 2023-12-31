import React from "react";
import { Barlow_Condensed, Bellefair } from "next/font/google";

const Barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const BellefairF = Bellefair({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HeaderNum: React.FC<Props> = ({ children, className }) => (
  <p
    className={`${Barlow.className} text-base font-bold tracking-widest ${className}`}
  >
    {children}
  </p>
);

export const HeaderLink: React.FC<Props> = ({ children, className }) => (
  <p
    className={`${Barlow.className} text-base uppercase tracking-wide cursor-pointer ${className}`}
  >
    {children}
  </p>
);

export const H1: React.FC<Props> = ({ children, className }) => (
  <h1
    className={`${BellefairF.className} text-7xl uppercase text-secondary sm:text-10xl ${className}}`}
  >
    {children}
  </h1>
);

export const H4: React.FC<Props> = ({ children }) => (
  <h4
    className={`${BellefairF.className} text-3xl text-gray-text uppercase tracking-wide md:text-xs lg:text-4xl`}
  >
    {children}
  </h4>
);

export const H5: React.FC<Props> = ({ children, className }) => (
  <h5
    className={`${Barlow.className} text-xl text-primary uppercase font-thin ${className}}`}
  >
    {children}
  </h5>
);

export const Body: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-lg font-thin text-primary capitalize tracking-wide text-center lg:text-justify lg:text-xl`}
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
    className={`${Barlow.className} text-base md:text-xl text-white opacity-25 uppercase tracking-wide lg:text-3xl`}
  >
    {children}
  </p>
);

export const Title: React.FC<Props> = ({ children }) => (
  <p
    className={`${Barlow.className} text-base md:text-xl text-white  uppercase tracking-wide lg:text-3xl`}
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

export const Name: React.FC<Props> = ({ children }) => (
  <p
    className={`${BellefairF.className} text-2xl text-white uppercase tracking-wide lg:text-4xl lg:text-right`}
  >
    {children}
  </p>
);
