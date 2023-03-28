import React from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import Image from "next/image";
import CaseStudy1 from "public/work1.png";
import ClientImage from "public/clientImage.png";
import TestmonialsContainer from "../components/Testimonials/TestmonialsContainer";
import TestimonialMessage from "../components/Testimonials/TestimonialMessage";
import TestimonialContainer from "../components/Testimonials/TestimonialContainer";
import TestimonialClientInfo from "../components/Testimonials/TestimonialClientInfo";

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="px-3 md:px-6 lg:px-20 py-16 bg-[#292526]">
      <h2 className="font-bold text-2xl md:text-4xl text-center text-white-100">
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

      <div className="flex flex-col items-center gap-16 mt-16">
        <div className="bg-[#91CFD2] bg-[url('/work3.png')] h-[40rem] w-full bg-cover bg-no-repeat pb-2 flex flex-col justify-end px-3 lg:grid lg:grid-cols-3 lg:place-items-center">
          <div className="bg-[#231F20] px-10 py-10 flex flex-col gap-5 order-2 rounded-lg lg:col-span-1">
            <Button intent="primary" className="px-5 py-1 font-bold self-start">
              Socure
            </Button>
            <h3 className="font-bold text-2xl text-white-100">
              A Predictive Analytics Platform For Consumers Digital Identity
              Verification
            </h3>
            <Button
              intent="outline"
              className="text-white-100 font-medium border-primary-300 rounded-lg py-2 px-4"
            >
              READ CASE STUDY
            </Button>
          </div>
        </div>

        <div className="bg-[#E0EAF3] bg-[url('/work2.png')] bg-cover bg-no-repeat h-[20rem] md:h-[40rem] w-full"></div>

        <div className="bg-primary-400 bg-[url('/work3.png')] bg-cover bg-no-repeat h-[20rem] md:h-[40rem] w-full"></div>
      </div>

      <div className="mt-16">
        <TestmonialsContainer>
          <TestimonialContainer>
            <TestimonialMessage>
              1 TDP helped identify the main pain points and designed a new UX
              that is accessible and easy to understand. The redesign pushed us
              forward on our mission to be able to verify 100% of IDs in
              real-time, and we raised over $100M in funding.
            </TestimonialMessage>
            <TestimonialClientInfo
              clientImage={ClientImage}
              clientName="ERICK DESOTO"
              clientTitle="VP of Product at Socure"
            />
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialMessage>
              2 TDP helped identify the main pain points and designed a new UX
              that is accessible and easy to understand. The redesign pushed us
              forward on our mission to be able to verify 100% of IDs in
              real-time, and we raised over $100M in funding.
            </TestimonialMessage>
            <TestimonialClientInfo
              clientImage={ClientImage}
              clientName="ERICK DESOTO"
              clientTitle="VP of Product at Socure"
            />
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialMessage>
              3 TDP helped identify the main pain points and designed a new UX
              that is accessible and easy to understand. The redesign pushed us
              forward on our mission to be able to verify 100% of IDs in
              real-time, and we raised over $100M in funding.
            </TestimonialMessage>
            <TestimonialClientInfo
              clientImage={ClientImage}
              clientName="ERICK DESOTO"
              clientTitle="VP of Product at Socure"
            />
          </TestimonialContainer>
        </TestmonialsContainer>
      </div>
    </section>
  );
};

export default Work;
