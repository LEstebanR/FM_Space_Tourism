"use client";

import React from "react";
import {
  Body,
  H1,
  H4,
  HeaderLink,
  Name,
  SubHeading,
  SubHeading2,
  Title,
  TitleNumber,
} from "@/components/Typography";
import Image from "next/image";
import { crew } from "../../../data";
import { GoDotFill } from "react-icons/go";

const CrewPage = () => {
  const [crewSelected, setCrewSelected] = React.useState(crew[0]);

  return (
    <div className="flex flex-col items-center md:justify-between  gap-4 lg:flex-wrap  lg:w-6/12 lg:self-start lg:max-h-128 lg:fixed lg:left-0 lg:mt-4 lg:pl-32 lg:gap-36">
      <span className="flex gap-2 md:self-start md:pl-8  ">
        <TitleNumber>02</TitleNumber>
        <Title>Meet your crew</Title>
      </span>
      <div className="w-full flex flex-col items-center justify-end min-h-imgContainer  md:order-last">
        <Image
          src={crewSelected.image}
          alt={crewSelected.name}
          width={177}
          height={244}
          className="md:hidden aspect-w-177 aspect-h-244"
        />
        <Image
          src={crewSelected.image}
          alt={crewSelected.name}
          width={300}
          height={300}
          className="hidden md:block lg:hidden self-center"
        />
        <Image
          src={crewSelected.image}
          alt={crewSelected.name}
          width={445}
          height={445}
          className="hidden lg:block aspect-w-445 aspect-h-445 ml-8 fixed bottom-0"
        />
        <hr className="w-10/12 border-1 border-gray-decorator mb-4 md:hidden " />
      </div>
      <ul className="flex gap-4 md:order-4 ">
        {crew.map((memberTeam, index) => {
          return (
            <li key={index}>
              <GoDotFill
                className={`cursor-pointer ${
                  memberTeam.name === crewSelected.name
                    ? "text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setCrewSelected(crew[index])}
              />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col items-center px-4 gap-2 md:w-8/12 md:gap-8 lg:h-64 lg:items-start">
        <H4>{crewSelected.role}</H4>
        <Name>{crewSelected.name}</Name>
        <Body>{crewSelected.bio}</Body>
      </div>
    </div>
  );
};

export default CrewPage;
