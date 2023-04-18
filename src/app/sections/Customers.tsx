"use client";

import React from "react";
import Span from "@/ui/Span";
import Image from "next/image";
import YCombinatorLogo from "public/ycombinatorLogo.svg";
import SequioiaLogo from "public/sequioiaLogo.svg";
import AccelLogo from "public/accelLogo.svg";
import A16zLogo from "public/a16zLogo.svg";
import { motion } from "framer-motion";

type Props = {};

const Customers = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="customers"
      className="px-3 md:px-6 py-5 md:py-10 bg-primary-100 flex flex-col items-center"
    >
      <h2 className="font-bold text-2xl md:text-4xl text-center text-white-100 mt-5">
        We helped our customers raise{" "}
        <Span size="accented" fontColor="accented">
          $1B+
        </Span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex  w-full mt-3"
      >
        <Image
          src={YCombinatorLogo}
          alt="Y Combinator logo"
          className="px-0 w-[25%] h-auto"
        />
        <Image
          src={SequioiaLogo}
          alt="Sequioia logo"
          className="border-x-1 border-primary-300 px-0 w-[25%] h-auto"
        />
        <Image
          src={AccelLogo}
          alt="Accel logo"
          className="border-r-1 border-primary-300 px-0 w-[25%] h-auto"
        />
        <Image src={A16zLogo} alt="A16z logo" className="px-0 w-[25%] h-auto" />
      </motion.div>
    </motion.section>
  );
};

export default Customers;
