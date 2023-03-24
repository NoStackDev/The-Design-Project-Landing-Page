import { mergeClassName } from "@/app/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import Span from "../ui/Span";

interface TestimonialClientInfoProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  clientImage?: StaticImageData;
  clientName?: string;
  clientTitle?: string;
  className?: string;
}

const TestimonialClientInfo = forwardRef<
  HTMLDivElement,
  TestimonialClientInfoProps
>(
  (
    { children, clientImage, clientName, clientTitle, className, ...props },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={mergeClassName(
          "grid grid-cols-4 grid-rows-2 gap-x-3",
          className
        )}
      >
        <Image
          src={clientImage || ""}
          className="col-span-1 row-start-1 row-end-3"
          alt="client"
        />
        <Span className="text-primary-300 col-span-3 row-start-1 row-end-2">
          {clientName}
        </Span>
        <span className="text-white-100  text-sm col-span-3 row-start-2 row-end-3">
          {clientTitle}
        </span>
        {children}
      </div>
    );
  }
);

export default TestimonialClientInfo;
