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
    <section id="cta" className="bg-white-200 px-3 md:px-6 lg:px-24 pt-0 flex flex-col gap-6 items-center">
      <h2 className="font-bold text-2xl md:text-4xl text-center text-black-200 mt-5">
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
      <span className="text-center text-primary-100/80">Try us risk free for 7 days, if you don’t love us, get your money back.</span>
      <Button className="font-bold py-3 px-10 text-2xl md:text-3xl lg:text-4xl z-6">
        GET STARTED
      </Button>

      <div className="relative w-full h-52 md:h-[25rem]">
        <Image
          src={HeroIllustration2}
          alt="illustration of a smilling lady using a laptop"
          className="h-48 md:h-72 w-auto absolute left-[50%] -translate-x-[98%] -bottom-1 z-5"
        />
        <Image
          src={HeroIllustration3}
          alt="illustration of a smilling man using a phone"
          className="h-64 md:h-96 w-auto absolute left-[50%] -translate-x-[50%] -bottom-1 z-4"
        />
        <Image
          src={HeroIllustration4}
          alt="illustration of a smiling lady holding a mug"
          className="h-44 md:h-64 w-auto absolute right-[50%]
          translate-x-[130%] -bottom-0 z-3"
        />
      </div>
    </section>
  );
};

export default Cta;
