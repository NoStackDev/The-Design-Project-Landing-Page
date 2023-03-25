import React from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import Image from "next/image";
import CaseStudy1 from "public/work1.png";
import CaseStudy2 from "public/work2.png";
import CaseStudy3 from "public/work3.png";
import ClientImage from "public/clientImage.png";
import TestmonialsContainer from "../components/Testimonials/TestmonialsContainer";
import TestimonialsButton from "../components/Testimonials/TestimonialsButton";
import TestimonialMessage from "../components/Testimonials/TestimonialMessage";
import TestimonialContainer from "../components/Testimonials/TestimonialContainer";
import TestimonialClientInfo from "../components/Testimonials/TestimonialClientInfo";

type Props = {};

const Work = (props: Props) => {
  return (
    <section className="px-3 py-16 bg-[#292526] mt-16">
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

      <div className="flex flex-col items-center gap-16 mt-16">
        <div className="bg-[#91CFD2] flex flex-col items-center pb-2">
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

        <div className="bg-[#91CFD2] flex flex-col items-center pb-2">
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

        <div className="bg-[#91CFD2] flex flex-col items-center pb-2">
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
