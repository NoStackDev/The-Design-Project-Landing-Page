import { mergeClassName } from "@/app/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import Quote from "public/quote.svg";

interface TestimonialMessageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const TestimonialMessage = forwardRef<HTMLDivElement, TestimonialMessageProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div>
        <Image
          src={Quote}
          alt="doulbe qoutaion"
          className="inline h-8 w-auto"
        />
        <p
          {...props}
          ref={ref}
          className={mergeClassName(
            "inline font-bold text-xl text-center text-white-100",
            className
          )}
        >
          {children}
        </p>
        <Image
          src={Quote}
          alt="double qoutation"
          className="inline rotate-180 h-8 w-auto"
        />
      </div>
    );
  }
);

export default TestimonialMessage;
