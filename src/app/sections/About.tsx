import React from "react";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Image from "next/image";
import PlanImage from "public/gameplan.svg";
import SquareImage from "public/square.svg";
import CycleImage from "public/cycle.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="bg-white-200 px-3 py-16">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-black-100">
        A Diverse Team Of{" "}
        <Span size="accented" fontColor="accented">
          Passionate
        </Span>{" "}
        UX Nerds Who Are Here To Help Your{" "}
        <Span size="accented" fontColor="accented">
          Startup Succeed
        </Span>
      </h2>

      <Paragraph intent="heading" className="mt-5">
        Take a minute to imagine how you’d feel watching your user count grow,
        and retention rates stay consistently high. When you prioritize
        effective UX, better retention and growth are natural consequences.
        Backed by countless hours of research and testing, TDP blends UX, UI,
        and Product design into a deliciously smooth process that fuels
        productivity and success.
      </Paragraph>

      <div className="flex flex-col gap-14 mt-16">
        <div className="flex">
          <Image
            src={PlanImage}
            alt="a slight curved arrow bisecting an x and o"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-center font-bold">Costs 70% less</h3>
            <Paragraph>
              We developed highly-optimized design processes to let us work fast
              and deliver incredible results—and we pass those savings on to you
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Image
            src={SquareImage}
            alt="a slight curved arrow bisecting an x and o"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-center font-bold">Adaptable and scalable</h3>
            <Paragraph>
              High-velocity is crucial to a startup’s success, and that’s why
              TDP delivers new designs every week so your momentum never falters
            </Paragraph>
          </div>
        </div>
        <div className="flex">
          <Image
            src={CycleImage}
            alt="a slight curved arrow bisecting an x and o"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-center font-bold">Fast turnaround times</h3>
            <Paragraph>
              TDP was built for flexibility—we quickly adapt and grow as you
              grow
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
