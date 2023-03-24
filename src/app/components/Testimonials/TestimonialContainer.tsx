import { mergeClassName } from "@/app/lib/utils";
import React, { HTMLAttributes, ReactNode, forwardRef } from "react";

interface TestimonialContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const TestimonialContainer = forwardRef<
  HTMLDivElement,
  TestimonialContainerProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={mergeClassName("min-w-full", className)}>
      {children}
    </div>
  );
});

export default TestimonialContainer;
