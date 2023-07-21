"use client";

import React, { useState } from "react";
import {
  Body,
  H1,
  HeaderLink,
  SubHeading,
  SubHeading2,
  Title,
  TitleNumber,
} from "@/components/Typography";
import Image from "next/image";
import { destinations } from "../../../data";

const Destination = () => {
  const [destinationSelected, setDestinationSelected] = useState(
    destinations[0]
  );

  return (
    <div className="text-white flex flex-col items-center gap-4 px-4 md:w-10/12 md:mt-4 lg:flex-row ">
      <div className="md:w-full lg:w-6/12 items-center flex flex-col lg:h-5/6 lg:justify-around ">
        <span className="flex gap-2 md:self-start lg:w-full lg:self-start top-0">
          <TitleNumber>01</TitleNumber>
          <Title>Pick your destination</Title>
        </span>
        <Image
          src={destinationSelected.image}
          alt={destinationSelected.name}
          width={170}
          height={170}
          className="md:hidden"
        />
        <Image
          src={destinationSelected.image}
          alt={destinationSelected.name}
          width={300}
          height={300}
          className="hidden md:block lg:hidden self-center"
        />
        <Image
          src={destinationSelected.image}
          alt={destinationSelected.name}
          width={445}
          height={445}
          className="hidden lg:block"
        />
      </div>
      <div className="lg:w-4/12">
        <ul className="flex gap-8 justify-center mb-8">
          {destinations.map((destination) => {
            return (
              <li
                key={destination.name}
                className={`h-8 ${
                  destination.name === destinationSelected.name
                    ? "border-b-2 border-white"
                    : ""
                }`}
                onClick={() =>
                  setDestinationSelected(
                    destinations.filter(
                      (dest) => dest.name === destination.name
                    )[0]
                  )
                }
              >
                <HeaderLink>{destination.name}</HeaderLink>
              </li>
            );
          })}
        </ul>
        <H1>{destinationSelected.name}</H1>
        <Body>{destinationSelected.description}</Body>
        <hr className="w-full border-gray-decorator my-4 md:my-12" />
        <div className="flex flex-col gap-8 items-center md:flex-row md:mt-4 md:justify-around md:w-full">
          <span>
            <SubHeading2>avd. distance</SubHeading2>
            <SubHeading>{destinationSelected.distance}</SubHeading>
          </span>
          <span>
            <SubHeading2>est. travel time</SubHeading2>
            <SubHeading>{destinationSelected.travel}</SubHeading>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Destination;
