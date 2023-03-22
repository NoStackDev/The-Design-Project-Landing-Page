import React from "react";
import Span from "../components/ui/Span";
import Paragraph from "../components/ui/Paragraph";

type Props = {};

const Blog = (props: Props) => {
  return (
    <section className="bg-white-200 w-screen px-3 py-16">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-black-100">
        How To Know If{" "}
        <Span fontColor="accented" size="accented">
          TDP
        </Span>{" "}
        Is Right For Your{" "}
        <Span fontColor="accented" size="accented">
          Startup
        </Span>
      </h2>

      <div className="flex flex-col gap-6 mt-10">
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-r-2xl rounded-tl-2xl">
          <Paragraph className="text-base text-white-100">
            You want a new, innovative, and user-centered UX strategy for an
            existing product
          </Paragraph>
        </div>
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-l-2xl rounded-tr-2xl">
          <Paragraph className="text-base text-white-100">
            You want to understand where users struggle when using your product
          </Paragraph>
        </div>
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-r-2xl rounded-tl-2xl">
          <Paragraph className="text-base text-white-100">
            You want to translate complex data into an easy-to-understand
            dashboard
          </Paragraph>
        </div>
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-l-2xl rounded-tr-2xl">
          <Paragraph className="text-base text-white-100">
            You need additional design resources that synergize with your
            (already) amazing design team
          </Paragraph>
        </div>
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-r-2xl rounded-tl-2xl">
          <Paragraph className="text-base text-white-100">
            You‘re researching how UX can impact you business growth
          </Paragraph>
        </div>
        <div className="bg-black-100 w-full pl-6 pr-6 py-4 rounded-l-2xl rounded-tr-2xl">
          <Paragraph className="text-base text-white-100">
            You want to understand your users and design products that meet
            their needs
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Blog;
