import React from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import HeroIllustration2 from "public/heroIllustration2.svg";
import HeroIllustration3 from "public/heroIllustration3.svg";
import HeroIllustration4 from "public/heroIllustration4.svg";
import Image from "next/image";

type Props = {};

const Cta = (props: Props) => {
  return (
    <section className="w-screen bg-white-200 px-3 pt-10 flex flex-col gap-6 items-center">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-black-200 mt-5">
        Let's{" "}
        <Span fontColor="accented" size="accented">
          Build
        </Span>{" "}
        Something{" "}
        <Span fontColor="accented" size="accented">
          Awesome
        </Span>{" "}
        Togther!
      </h2>
      <Button className="font-bold py-3 px-10">GET STARTED</Button>

      <div className="relative w-full h-52">
        <Image
          src={HeroIllustration2}
          alt="illustration of a smilling lady using a laptop"
          className="h-44 w-auto z-4 absolute left-0 -bottom-1"
        />
        <Image
          src={HeroIllustration3}
          alt="illustration of a smilling man using a phone"
          className="h-48 w-auto absolute left-1/2 -translate-x-1/2 -bottom-1 z-3"
        />
        <Image
          src={HeroIllustration4}
          alt="illustration of a smiling lady holding a mug"
          className="h-44 w-auto absolute right-0 -bottom-1 z-2"
        />
      </div>
    </section>
  );
};

export default Cta;
