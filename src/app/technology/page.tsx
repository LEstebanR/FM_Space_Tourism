"use client";

import React from "react";
import { Title, TitleNumber, H4, Name, Body } from "@/components/Typography";
import { technology } from "../../../data";

const TechnologyPage = () => {
  const [techSelected, setTechSelected] = React.useState(technology[0]);
  return (
    <div className="text-white">
      <span className="flex gap-2 md:self-start md:pl-8  ">
        <TitleNumber>03</TitleNumber>
        <Title>space launch 101</Title>
      </span>
      <div
        className={`w-screen bg-${techSelected.images.portrait} h-44 bg-cover bg-no-repeat bg-bottom`}
      ></div>
      <ul className="flex gap-4 py-4 justify-center">
        {technology.map((item, index) => (
          <li
            key={item.name}
            className={`w-16 h-16 border-white border rounded-full flex items-center justify-center cursor-pointer
            ${ item.name === techSelected.name ? "bg-white text-black" : "bg-transparent"}`
          }
            onClick={() => setTechSelected(technology[index])}
          >
            {index +1 }
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center px-4 gap-4 mt-8 md:w-8/12 md:gap-8 lg:h-64 lg:items-start">
        <H4>The terminology</H4>
        <Name>{techSelected.name}</Name>
        <Body>{techSelected.description }</Body>
      </div>
    </div>
  );
};

export default TechnologyPage;
