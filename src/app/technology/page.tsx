"use client";

import React from "react";
import { Title, TitleNumber, H4, Name, Body } from "@/components/Typography";
import { technology } from "../../../data";

const TechnologyPage = () => {
  const [techSelected, setTechSelected] = React.useState(technology[0]);
  return (
    <div className="">
      <span className="flex gap-2 justify-center md:self-start md:pl-8  ">
        <TitleNumber>03</TitleNumber>
        <Title>space launch 101</Title>
      </span>
      <div className="lg:flex lg:pl-20 lg:w-screen lg:items-center">
      <div
        className={`w-screen h-44 md:h-80 bg-cover bg-no-repeat mt-4 lg:order-3 lg:w-6/12 lg:h-100 lg:bg-contain bg-right 
          ${
            techSelected.name === "Launch vehicle"
            ? "bg-launch-vehicle-portrait bg-bottom"
            : techSelected.name === "Spaceport"
            ? "bg-spaceport-portrait bg-left-bottom"
            : techSelected.name === "Space capsule"
            ? "bg-space-capsule-portrait bg-center"
            : ""
          }
        `}
      ></div>
      <ul className="flex gap-4 py-4 justify-center lg:flex-col lg:pl-32">
        {technology.map((item, index) => (
          <li
            key={item.name}
            className={`w-10 h-10 border-white border rounded-full flex items-center justify-center cursor-pointer lg:w-20 lg:h-20 lg:mb-4
            ${ item.name === techSelected.name ? "bg-white text-black" : "bg-transparent"}`
          }
            onClick={() => setTechSelected(technology[index])}
          >
            {index +1 }
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center px-4 gap-4 md:w-7/12 m-auto md:mt-8 lg:w-4/12 lg:px-12 lg:mt-32">
        <H4>The terminology...</H4>
        <Name>{techSelected.name}</Name>
        <Body>{techSelected.description }</Body>
      </div>
      </div>

    </div>
  );
};

export default TechnologyPage;
