"use client";

import React from "react";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import HeroIllustration2 from "public/heroIllustration2.svg";
import HeroIllustration3 from "public/heroIllustration3.svg";
import HeroIllustration4 from "public/heroIllustration4.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Cta = (props: Props) => {
  return (
    <section
      id="cta"
      className="bg-white-200 px-3 md:px-6 lg:px-24 pt-0 flex flex-col gap-6 items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-2xl md:text-4xl text-center text-black-200 mt-5"
      >
        Let's{" "}
        <Span fontColor="accented" size="accented">
          Build
        </Span>{" "}
        Something{" "}
        <Span fontColor="accented" size="accented">
          Awesome
        </Span>{" "}
        Togther!
      </motion.h2>
      <motion.span
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-primary-100/80"
      >
        Try us risk free for 7 days, if you don’t love us, get your money back.
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-[10]"
      >
        <Button className="font-bold py-3 px-10 text-2xl md:text-3xl lg:text-4xl">
          GET STARTED
        </Button>
      </motion.div>

      <div className="relative w-full h-52 md:h-[25rem]">
        <motion.div
          initial={{ opacity: 0, x: "-180%" }}
          whileInView={{ opacity: 1, x: "-98%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-48 md:h-72 w-auto absolute left-[50%] -bottom-1 z-5"
        >
          <Image
            src={HeroIllustration2}
            alt="illustration of a smilling lady using a laptop"
            className="h-48 md:h-72 w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-64 md:h-96 w-auto absolute left-[50%] -bottom-1 z-4"
        >
          <Image
            src={HeroIllustration3}
            alt="illustration of a smilling man using a phone"
            className="h-64 md:h-96 w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "200%" }}
          whileInView={{ opacity: 1, x: "130%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-44 md:h-64 w-auto absolute right-[50%] -bottom-0 z-3"
        >
          <Image
            src={HeroIllustration4}
            alt="illustration of a smiling lady holding a mug"
            className="h-44 md:h-64 w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
