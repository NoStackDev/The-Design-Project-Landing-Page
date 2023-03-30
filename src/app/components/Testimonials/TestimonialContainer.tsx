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
    <div
      ref={ref}
      {...props}
      className={mergeClassName(
        "min-w-full flex flex-col items-center gap-8",
        className
      )}
    >
      {children}
    </div>
  );
});

TestimonialContainer.displayName = "TestimonialContainer";

export default TestimonialContainer;
