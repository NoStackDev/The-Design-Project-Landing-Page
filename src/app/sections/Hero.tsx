"use client";

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
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id="#hero"
      className="bg-primary-200 pt-16 md:pt-36 lg:pt-[5rem] flex flex-col items-center px-3 md:px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-3xl md:text-5xl lg:w-[62.3125rem] text-center text-black-200"
      >
        A UI/UX Design Subscription So{" "}
        <Span size="h1Accented" fontColor="accented">
          Good
        </Span>{" "}
        It Should Come With A{" "}
        <Span size="h1Accented" fontColor="accented">
          Warning
        </Span>{" "}
        Label
      </motion.h1>

      <div className="mt-6 md:mt-8 lg:mt-7 flex flex-col lg:flex-row items-start gap-3 md:gap-6 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-left gap-3 md:gap-6 lg:gap-2 items-center"
        >
          <Image
            src={CheckMarkIcon}
            className="h-4 w-4 md:h-8 md:w-8 lg:w-6"
            alt="check mark"
          />
          <Span className="md:text-2xl lg:text-base">No hiring headaches</Span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-left gap-3 md:gap-6 lg:gap-2 items-center"
        >
          <Image
            src={CheckMarkIcon}
            className="h-4 w-4 md:h-8 md:w-8 lg:w-6"
            alt="check mark"
          />
          <Span className="md:text-2xl lg:text-base">
            Weekly turnaround times
          </Span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-left gap-3 md:gap-6 lg:gap-2 items-center"
        >
          <Image
            src={CheckMarkIcon}
            className="h-4 w-4 md:h-8 md:w-8 lg:w-6"
            alt="check mark"
          />
          <Span className="md:text-2xl lg:text-base">
            One flat monthly rate
          </Span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className="mt-7 md:mt-8 p-3 lg:mt-6 text-base md:text-3xl lg:text-base z-6 font-bold"
          intent="linear"
        >
          START YOUR RISK FREE TRIAL
        </Button>
      </motion.div>

      <div className="mt-2 md:mt-8 relative w-full h-60 md:h-[21.5rem] lg:h-[24rem]">
        <motion.div
          initial={{ opacity: 0, x: "-300%" }}
          whileInView={{ opacity: 1, x: "-247%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 , duration: 0.5 }}
          className="hidden md:block h-52 lg:h-[15.125rem] w-auto absolute left-[50%]
          -bottom-0 z-1"
        >
          <Image
            src={HeroIllustration1}
            alt="illustration of a smiling lady holding a mug"
            className="hidden md:block h-52 lg:h-[15.125rem] w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-150%" }}
          whileInView={{ opacity: 1, x: "-98%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 , duration: 0.5 }}
          className="h-48 md:h-72 lg:h-[20.8125rem] w-auto absolute left-[50%] z-5 -bottom-1"
        >
          <Image
            src={HeroIllustration2}
            alt="illustration of a smilling lady using a laptop"
            className="h-48 md:h-72 lg:h-[20.8125rem] w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "-50%" }}
          viewport={{ once: true }}
          className="h-64 md:h-96 lg:h-[26.875rem] w-auto absolute left-[50%] -bottom-1 z-4"
        >
          <Image
            src={HeroIllustration3}
            alt="illustration of a smilling man using a phone"
            className="h-64 md:h-96 lg:h-[26.875rem] w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "200%" }}
          whileInView={{ opacity: 1, x: "130%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 , duration: 0.5 }}
          className="h-44 md:h-64 lg:h-[18.125rem] w-auto absolute right-[50%] -bottom-0 z-3"
        >
          <Image
            src={HeroIllustration4}
            alt="illustration of a smiling lady holding a mug"
            className="h-44 md:h-64 lg:h-[18.125rem] w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "300%" }}
          whileInView={{ opacity: 1, x: "250%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5  , duration: 0.5}}
          className="hidden md:block h-48 lg:h-[13.75rem] w-auto absolute right-[50%] -bottom-0 z-2"
        >
          <Image
            src={HeroIllustration5}
            alt="illustration of a smiling lady holding a mug"
            className="hidden md:block h-48 lg:h-[13.75rem] w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
