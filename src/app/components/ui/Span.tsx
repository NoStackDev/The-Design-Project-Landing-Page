import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const spanVariants = cva("", {
  variants: {
    size: {
      default: "text-sm md:text-lg font-bold",
      accented: "text-2xl md:text-4xl font-bold",
      h1Accented: "text-3xl md:text-5xl font-bold",
    },
    fontColor: {
      default: "text-black-100",
      accented: "text-primary-400",
    },
  },
  defaultVariants: {
    size: "default",
    fontColor: "default",
  },
});

interface SpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spanVariants> {}

const Span = forwardRef<HTMLSpanElement, SpanProps>(
  ({ children, className, size, fontColor, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={mergeClassName(spanVariants({ size, fontColor, className }))}
      >
        {children}
      </span>
    );
  }
);

Span.displayName = "Span";

export default Span;
