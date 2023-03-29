"use client";

import React, { useRef } from "react";
import Span from "../components/ui/Span";
import Image from "next/image";
import Vector from "public/vector.svg";

type Props = {};

const Faq = (props: Props) => {
  const faqsContainerDivs = useRef<HTMLDivElement>(null);

  const openFaq = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const chevronImgEle = e.currentTarget.getElementsByTagName("img");
    chevronImgEle[0].dataset.open =
      chevronImgEle[0].dataset.open === "false" ? "true" : "false";

    const children = e.currentTarget.getElementsByTagName("div");
    const answerEle = children[1];
    answerEle.style.height =
      answerEle.dataset.open === "false"
        ? answerEle.scrollHeight.toString() + "px"
        : "0px";
    answerEle.dataset.open =
      answerEle.dataset.open === "false" ? "true" : "false";
  };

  return (
    <section
      id="faq"
      className="py-10 px-3 md:px-6 lg:px-16 bg-white-200 flex flex-col gap-6"
    >
      <h2 className="font-bold text-2xl md:text-4xl text-center text-black-200">
        Our Most{" "}
        <Span fontColor="accented" size="accented">
          Frequently
        </Span>{" "}
        Asked Questions
      </h2>

      <div className="flex flex-col gap-2" ref={faqsContainerDivs}>
        <div
          className="border-b-1 border-b-primary-400 py-3"
          onClick={(e) => openFaq(e)}
        >
          <div className="flex justify-between pr-1">
            <span className="text-base md:text-2xl font-bold">
              Do I really get unlimited design services?
            </span>
            <Image
              className="w-4 h-auto transition-transform duration-[600ms] ease-in-out data-[open=false]:rotate-0 data-[open=true]:rotate-180"
              data-open="false"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div
            className="p-2 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=true]:opacity-70 transition-[height] ease-in-out duration-[600ms]  overflow-hidden text-base md:text-2xl"
            data-open="false"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div
          className="border-b-1 border-b-primary-400 py-3"
          onClick={(e) => openFaq(e)}
        >
          <div className="flex justify-between pr-1">
            <span className="text-base md:text-2xl font-bold">
              What is a realistic turnaround time?
            </span>
            <Image
              className="w-4 h-auto transition-transform duration-[600ms] ease-in-out data-[open=false]:rotate-0 data-[open=true]:rotate-180"
              data-open="false"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div
            className="p-2 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=true]:opacity-70 transition-[height] ease-in-out duration-[600ms]  overflow-hidden text-base md:text-2xl"
            data-open="false"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div
          className="border-b-1 border-b-primary-400 py-3"
          onClick={(e) => openFaq(e)}
        >
          <div className="flex justify-between pr-1">
            <span className="text-base md:text-2xl font-bold">
              I need my designs ASAP—can you help?
            </span>
            <Image
              className="w-4 h-auto transition-transform duration-[600ms] ease-in-out data-[open=false]:rotate-0 data-[open=true]:rotate-180"
              data-open="false"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div
            className="p-2 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=true]:opacity-70 transition-[height] ease-in-out duration-[600ms]  overflow-hidden text-base md:text-2xl"
            data-open="false"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div
          className="border-b-1 border-b-primary-400 py-3"
          onClick={(e) => openFaq(e)}
        >
          <div className="flex justify-between pr-1">
            <span className="text-base md:text-2xl font-bold">
              What types of projects do you work on?
            </span>
            <Image
              className="w-4 h-auto transition-transform duration-[600ms] ease-in-out data-[open=false]:rotate-0 data-[open=true]:rotate-180"
              data-open="false"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div
            className="p-2 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=true]:opacity-70 transition-[height] ease-in-out duration-[600ms]  overflow-hidden text-base md:text-2xl"
            data-open="false"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aliquam dicta maxime animi sed debitis eius incidunt eos sit.
            Ratione rerum quod quia officia, commodi id saepe sequi laboriosam
            libero!
          </div>
        </div>

        <div
          className="border-b-1 border-b-primary-400 py-3"
          onClick={(e) => openFaq(e)}
        >
          <div className="flex justify-between pr-1">
            <span className="text-base md:text-2xl font-bold">
              What if I want to cancel my service?
            </span>
            <Image
              className="w-4 h-auto transition-transform duration-[600ms] ease-in-out data-[open=false]:rotate-0 data-[open=true]:rotate-180"
              data-open="false"
              src={Vector}
              alt="icon showing state of frequently asked questions answer display"
            />
          </div>
          <div
            className="p-2 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=true]:opacity-70 transition-[height] ease-in-out duration-[600ms]  overflow-hidden text-base md:text-2xl"
            data-open="false"
          >
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
