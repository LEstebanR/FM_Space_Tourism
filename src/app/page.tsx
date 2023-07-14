import { H5, H1, Body, BodyMenu } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full border">
      <div className="flex flex-col items-center justify-around h-full py-8 ">
        <span className="flex flex-col items-center gap-2 sm:w-1/2">
          <H5>so, you want to travel to</H5>
          <H1>space</H1>
          <Body>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Body>
        </span>
        <Link href="#">
          <div className="bg-secondary rounded-full h-36 sm:h-60 w-36 sm:w-60 flex items-center justify-center">
            <BodyMenu>Explore</BodyMenu>
          </div>
        </Link>
      </div>
    </main>
  );
}
