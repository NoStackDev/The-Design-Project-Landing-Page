"use client";

import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef, useRef, useState } from "react";
import TestimonialsButton from "./TestimonialsButton";
import Image from "next/image";
import ChevronLeft from "public/chevronLeft.svg";

const testmonialsContainerVariants = cva("", {
  variants: {
    intent: {
      default: ["flex justify-between items-center gap-2"],
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface TestmonialsContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testmonialsContainerVariants> {}

const TestmonialsContainer = forwardRef<
  HTMLDivElement,
  TestmonialsContainerProps
>(({ children, intent, className, ...props }, ref) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsCount = React.Children.count(children);
  const testimonialsDivRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (testimonialsDivRef.current) {
      const testimonialsDiv = testimonialsDivRef.current;
      testimonialsDiv.style.transform = `translateX(-${
        currentTestimonial === testimonialsCount - 1
          ? 0
          : currentTestimonial + 1
      }00%)`;
      setCurrentTestimonial(
        currentTestimonial === testimonialsCount - 1
          ? 0
          : currentTestimonial + 1
      );
    }
  };

  const prev = () => {
    if (testimonialsDivRef.current) {
      const testimonialsDiv = testimonialsDivRef.current;
      testimonialsDiv.style.transform = `translateX(-${
        currentTestimonial === 0
          ? testimonialsCount - 1
          : currentTestimonial - 1
      }00%)`;
      setCurrentTestimonial(
        currentTestimonial === 0
          ? testimonialsCount - 1
          : currentTestimonial - 1
      );
    }
  };

  return (
    <div
      ref={ref}
      {...props}
      className={mergeClassName(
        testmonialsContainerVariants({ intent, className })
      )}
    >
      <TestimonialsButton onClick={prev}>
        <Image src={ChevronLeft} alt="left arrow" className="w-16 h-16" />
      </TestimonialsButton>

      <div className="h-full w-full overflow-hidden">
        <div
          className="relative flex w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          ref={testimonialsDivRef}
        >
          {children}
        </div>
      </div>

      <TestimonialsButton onClick={next}>
        <Image
          src={ChevronLeft}
          className="rotate-180 w-16 h-16"
          alt="left arrow"
        />
      </TestimonialsButton>
    </div>
  );
});

TestmonialsContainer.displayName = "TestmonialsContainer";

export default TestmonialsContainer;
