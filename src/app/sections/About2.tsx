"use client";

import React from "react";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";
import Image from "next/image";
import HeroIllustration2 from "public/heroIllustration2.svg";
import HeroIllustration3 from "public/heroIllustration3.svg";
import HeroIllustration4 from "public/heroIllustration4.svg";
import { motion } from "framer-motion";

type Props = {};

const About2 = (props: Props) => {
  return (
    <section className="px-3 md:px-6 py-10 flex flex-col items-center bg-white-200">
      <motion.h2
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-2xl md:text-4xl text-center text-black-200"
      >
        How{" "}
        <Span fontColor="accented" size="accented">
          Signing Up
        </Span>{" "}
        With The Design Project{" "}
        <Span fontColor="accented" size="accented">
          Works
        </Span>
        !?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Paragraph intent="heading" className="mt-5">
          Take a minute to imagine how you’d feel watching your user count grow,
          and retention rates stay consistently high. When you prioritize
          effective UX, better retention and growth are natural consequences.
          Backed by countless hours of research and testing, TDP blends UX, UI,
          and Product design into a deliciously smooth process that fuels
          productivity and success.
        </Paragraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex flex-col lg:flex-row gap-16"
      >
        <div className="flex flex-col md:justify-between">
          <span className="rounded-full text-3xl py-2 px-3 bg-gradient-to-b from-primary-400 to-[#E83C11] font-bold text-white-200 self-center">
            01
          </span>
          <h3 className="font-bold text-primary-300 text-2xl md:text-3xl lg:text-4xl text-center mt-5">
            Sign Up For One Of Our Services
          </h3>
          <Image
            src={HeroIllustration3}
            alt="illustration of a smilling man using a phone"
            className="h-32 md:h-40 w-auto mt-5"
          />
          <Paragraph className="text-center">
            Sign up for one of our affordable subscription play which offer a
            variety of options to fit your unique needs.
          </Paragraph>
        </div>

        <div className="flex flex-col md:justify-between">
          <span className="rounded-full text-3xl py-2 px-3 bg-gradient-to-b from-primary-400 to-[#E83C11] font-bold text-white-200 self-center">
            02
          </span>
          <h3 className="font-bold text-primary-300 text-2xl md:text-3xl lg:text-4xl text-center mt-5">
            Meet your perfect match
          </h3>
          <Image
            src={HeroIllustration2}
            alt="illustration of a smilling man using a phone"
            className="h-32 md:h-40 w-auto mt-5"
          />
          <Paragraph className="text-center">
            We match you with the best TDP design expert for your needs. Then we
            schedule a call to learn about your startup.
          </Paragraph>
        </div>

        <div className="flex flex-col md:justify-between">
          <span className="rounded-full text-3xl py-2 px-3 bg-gradient-to-b from-primary-400 to-[#E83C11] font-bold text-white-200 self-center">
            03
          </span>
          <h3 className="font-bold text-primary-300 text-2xl md:text-3xl lg:text-4xl text-center mt-5">
            The first sprint begins (hold on tight)
          </h3>
          <Image
            src={HeroIllustration4}
            alt="illustration of a smilling man using a phone"
            className="h-32 md:h-40 w-auto mt-5"
          />
          <Paragraph className="text-center">
            TDP manages the project, learns the intimate details of what your
            users want, and delivers impactful design iterations.
          </Paragraph>
        </div>
      </motion.div>
    </section>
  );
};

export default About2;
