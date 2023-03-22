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
    <section className="px-3 py-10 w-screen bg-primary-100 flex flex-col items-center">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-white-100 mt-5">
        We helped our customers raise{" "}
        <Span size="accented" fontColor="accented">
          $1B+
        </Span>
      </h2>

      <div className="grid grid-cols-customTempCols w-full mt-3">
        <Image
          src={YCombinatorLogo}
          alt="Y Combinator logo"
          className="h-16 w-auto"
        />
        <Image src={SequioiaLogo} alt="Sequioia logo" className="h-16 w-auto" />
        <Image src={AccelLogo} alt="Accel logo" className="h-16 w-auto" />
        <Image src={A16zLogo} alt="A16z logo" className="h-16 w-auto" />
      </div>
    </section>
  );
};

export default Customers;
