import React from "react";
import Span from "@/ui/Span";
import Image from "next/image";
import YCombinatorLogo from "public/ycombinatorLogo.svg";
import SequioiaLogo from "public/sequioiaLogo.svg";
import AccelLogo from "public/accelLogo.svg";
import A16zLogo from "public/a16zLogo.svg";

type Props = {};

const Customers = (props: Props) => {
  return (
    <section className="px-3 md:px-6 py-5 md:py-10 bg-primary-100 flex flex-col items-center">
      <h2 className="font-bold text-2xl md:text-4xl text-center text-white-100 mt-5">
        We helped our customers raise{" "}
        <Span size="accented" fontColor="accented">
          $1B+
        </Span>
      </h2>

      <div className="grid grid-cols-customTempCols justify-items-center place-items-center w-full mt-3">
        <Image
          src={YCombinatorLogo}
          alt="Y Combinator logo"
        />
        <Image
          src={SequioiaLogo}
          alt="Sequioia logo"
          className="border-x-1 border-primary-300"
        />
        <Image
          src={AccelLogo}
          alt="Accel logo"
          className="border-r-1 border-primary-300"
        />
        <Image
          src={A16zLogo}
          alt="A16z logo"
        />
      </div>
    </section>
  );
};

export default Customers;
