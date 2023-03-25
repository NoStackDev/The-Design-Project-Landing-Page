import React from "react";
import Span from "../components/ui/Span";
import Image from "next/image";
import CheckMarkIcon from "public/checkMark.svg";
import HeroIllustration1 from "public/heroIllustration1.svg";
import HeroIllustration2 from "public/heroIllustration2.svg";
import HeroIllustration3 from "public/heroIllustration3.svg";
import HeroIllustration4 from "public/heroIllustration4.svg";
import HeroIllustration5 from "public/heroIllustration5.svg";
import Button from "@/ui/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="h-screen bg-primary-200 pt-16 flex flex-col items-center px-3">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-black-200">
        A UI/UX Design Subscription So{" "}
        <Span size="h1Accented" fontColor="accented">
          Good
        </Span>{" "}
        It Should Come With A{" "}
        <Span size="h1Accented" fontColor="accented">
          Warning
        </Span>{" "}
        Label
      </h1>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <Image src={CheckMarkIcon} className="h-4 w-4" alt="check mark" />
          <Span>No hiring headaches</Span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={CheckMarkIcon} className="h-4 w-4" alt="check mark" />
          <Span>Weekly turnaround times</Span>
        </div>
        <div className="flex items-center gap-3">
          <Image src={CheckMarkIcon} className="h-4 w-4" alt="check mark" />
          <Span>One flat monthly rate</Span>
        </div>
      </div>

      <Button className="mt-6" intent="linear">
        start your risk free trial
      </Button>

      <div className="mt-1 relative w-full h-full">
        <Image
          src={HeroIllustration2}
          alt="illustration of a smilling lady using a laptop"
          className="h-56 w-auto absolute left-0 -bottom-1 z-4"
        />
        <Image
          src={HeroIllustration3}
          alt="illustration of a smilling man using a phone"
          className="h-72 w-auto absolute left-1/4 -bottom-1 z-3"
        />
        <Image
          src={HeroIllustration4}
          alt="illustration of a smiling lady holding a mug"
          className="h-52 w-auto absolute right-0 -bottom-0 z-2"
        />
      </div>
    </section>
  );
};

export default Hero;
