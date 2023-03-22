import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva("", {
  variants: {
    intent: {
      generic: ["text-sm sm:text-base text-left sm:text-center"],
      heading: ["text-sm sm:text-base text-center"],
    },
  },
  defaultVariants: {
    intent: "generic",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, intent, ...props }, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={mergeClassName(paragraphVariants({ className, intent }))}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;
