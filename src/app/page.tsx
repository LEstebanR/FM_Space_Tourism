import { H5, H1, Body, BodyMenu } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between md:justify-around h-full pb-12">
        <span className="flex flex-col items-center justify-between gap-4 px-4 sm:w-1/2 lg:w-1/3 pt-8 lg:pt-24 lg:gap-8">
          <H5 className="lg:self-start lg:text-left">so, you want to travel to</H5>
          <H1 className="lg:self-start lg:text-left ">space</H1>
          <Body>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Body>
        </span>
        <Link href="#" className="lg:mt-48">
          <div className="bg-transparent hover:lg:bg-gray-decorator rounded-full lg:h-96 lg:w-96 lg:flex items-center justify-center">
            <div className="bg-secondary rounded-full h-36 sm:h-60 lg:h-72 w-36 sm:w-60 lg:w-72 flex items-center justify-center">
              <BodyMenu>Explore</BodyMenu>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
