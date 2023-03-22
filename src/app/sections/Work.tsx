import React from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import Image from "next/image";
import CaseStudy1 from "public/work1.png";
import CaseStudy2 from "public/work2.png";
import CaseStudy3 from "public/work3.png";

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="px-3 py-10 bg-[#292526] w-screen mt-16">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-white-100">
        How{" "}
        <Span fontColor="accented" size="accented">
          Accessible
        </Span>{" "}
        UX Design Is Changing The{" "}
        <Span fontColor="accented" size="accented">
          Businesses
        </Span>{" "}
        For The Better
      </h2>
      <div>
        <div className="bg-[#91CFD2] flex flex-col items-center pb-2 mt-10">
          <div className="bg-[#231F20] px-5 py-10 rounded-sm flex flex-col gap-5 order-2 w-95">
            <Button intent="primary" className="px-5 py-1 font-bold self-start">
              Socure
            </Button>
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white-100">
              A Predictive Analytics Platform For Consumers Digital Identity
              Verification
            </h3>
            <Button
              intent="outline"
              className="text-white-100 font-medium border-primary-300"
            >
              READ CASE STUDY
            </Button>
          </div>
          <Image
            src={CaseStudy1}
            alt="A predictive analytics platform for consumers digital identity verification design case study"
            className="order-1"
          />
        </div>

        <div className="bg-[#91CFD2] flex flex-col items-center pb-2 mt-10">
          <div className="bg-[#231F20] px-5 py-10 rounded-sm flex flex-col gap-5 order-2 w-95">
            <Button intent="primary" className="px-5 py-1 font-bold self-start">
              Socure
            </Button>
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white-100">
              A Predictive Analytics Platform For Consumers Digital Identity
              Verification
            </h3>
            <Button
              intent="outline"
              className="text-white-100 font-medium border-primary-300"
            >
              READ CASE STUDY
            </Button>
          </div>
          <Image
            src={CaseStudy2}
            alt="A predictive analytics platform for consumers digital identity verification design case study"
            className="order-1"
          />
        </div>

        <div className="bg-[#91CFD2] flex flex-col items-center pb-2 mt-10">
          <div className="bg-[#231F20] px-5 py-10 rounded-sm flex flex-col gap-5 order-2 w-95">
            <Button intent="primary" className="px-5 py-1 font-bold self-start">
              Socure
            </Button>
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white-100">
              A Predictive Analytics Platform For Consumers Digital Identity
              Verification
            </h3>
            <Button
              intent="outline"
              className="text-white-100 font-medium border-primary-300"
            >
              READ CASE STUDY
            </Button>
          </div>
          <Image
            src={CaseStudy3}
            alt="A predictive analytics platform for consumers digital identity verification design case study"
            className="order-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
