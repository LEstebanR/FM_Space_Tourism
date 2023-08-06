"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderNum, HeaderLink } from "./Typography";

const pages = [
  {
    number: "00",
    title: "home",
    href: "/",
  },
  {
    number: "01",
    title: "destination",
    href: "/destination",
  },
  {
    number: "02",
    title: "crew",
    href: "/crew",
  },
  {
    number: "03",
    title: "technology",
    href: "/technology",
  },
];

const Header: React.FC = () => {
  const [selected, setSelected] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  const MobileMenu: React.FC = () => {
    return (
      <div className=" sm:hidden top-0 z-20 h-screen w-8/12 fixed right-0 flex flex-col items-end gap-8 backdrop-blur-2xl bg-white/5 ">
        <div className=" h-24 w-24  flex items-end justify-end px-8">
          <Image
            src={"/assets/shared/icon-close.svg"}
            width={20}
            alt="close"
            onClick={() => setShowMenu(false)}
            height={20}
            className="h-auto w-auto cursor-pointer"
          />
        </div>
        <ul className="list-none w-full flex flex-col gap-4 p-8">
          {pages.map((page) => (
            <li key={page.title} onClick={() => setShowMenu(false)}>
              <Link href={page.href}>
                <div
                  onClick={() => setSelected(page.title)}
                  className="flex gap-3"
                >
                  <HeaderNum>{page.number}</HeaderNum>
                  <HeaderLink>{page.title}</HeaderLink>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <header className="text-white flex justify-between items-center m-1 h-20 px-4 lg:mt-8">
      <Link href="/">
        <Image
          src={"/assets/shared/logo.svg"}
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>
      <div className="hidden lg:block border border-gray-decorator w-4/12 h-0 grow ml-12 z-10" />
      <nav className="hidden h-full sm:flex items-center backdrop-blur-3xl lg:w-6/12 md:pl-12 lg:bg-white/5">
        {pages.map((page) => (
          <NavItem
            key={page.title}
            page={page}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </nav>
      {!showMenu ? (
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="Menu"
          className="sm:hidden w-auto "
          height={25}
          width={25}
          onClick={() => setShowMenu(true)}
        />
      ) : (
        <MobileMenu />
      )}
    </header>
  );
};

const NavItem: React.FC<{
  page: {
    number: string;
    title: string;
    href: string;
  };
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}> = ({ page, selected, setSelected }) => (
  <ul>
    <li className="inline-block mr-10 h-full">
      <Link href={page.href}>
        <div
          className={`flex items-center gap-1 h-full ${
            page.title === selected &&
            "border-b-2 border-white hover:border-white"
          } ${
            page.title !== selected &&
            "hover:border-b-2 hover:border-gray-decorator"
          }`}
          onClick={() => setSelected(page.title)}
        >
          <HeaderNum className="md:hidden">{page.number}</HeaderNum>
          <HeaderLink>{page.title}</HeaderLink>
        </div>
      </Link>
    </li>
  </ul>
);

export default Header;
