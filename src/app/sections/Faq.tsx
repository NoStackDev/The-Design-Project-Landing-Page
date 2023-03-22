import React from "react";
import Span from "../components/ui/Span";
import Image from "next/image";
import Vector from "public/vector.svg";

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="py-10 px-3 bg-white-200 w-screen flex flex-col gap-6">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-black-200">
        Our Most{" "}
        <Span fontColor="accented" size="accented">
          Frequently
        </Span>{" "}
        Asked Questions
      </h2>

      <div>
        <div className="border-b-1 border-b-primary-400 py-3">
          <div className="flex justify-between pr-1">
            <span>Do I really get unlimited design services?</span>
            <Image
              className="w-4 h-auto"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div className="hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div className="border-b-1 border-b-primary-400 py-3">
          <div className="flex justify-between pr-1">
            <span>What is a realistic turnaround time?</span>
            <Image
              className="w-4 h-auto"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div className="hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div className="border-b-1 border-b-primary-400 py-3">
          <div className="flex justify-between pr-1">
            <span>I need my designs ASAP—can you help?</span>
            <Image
              className="w-4 h-auto"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div className="hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div className="border-b-1 border-b-primary-400 py-3">
          <div className="flex justify-between pr-1">
            <span>What types of projects do you work on?</span>
            <Image
              className="w-4 h-auto"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div className="hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div className="border-b-1 border-b-primary-400 py-3">
          <div className="flex justify-between pr-1">
            <span>What if I want to cancel my service?</span>
            <Image
              className="w-4 h-auto"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div className="hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
