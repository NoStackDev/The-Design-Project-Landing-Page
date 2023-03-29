import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardCaptionnVariants = cva("font-regular text-center text-sm group-hover:text-white-100", {
  variants: {
    intent: {
      default: ["text-black-100"],
      active: ["text-white-100"],
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface PricingCardCaptionProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pricingCardCaptionnVariants> {}

const PricingCardCaption = forwardRef<HTMLSpanElement, PricingCardCaptionProps>(
  ({ children, intent, className, ...props }, ref) => {
    return (
      <span
        {...props}
        ref={ref}
        className={mergeClassName(
          pricingCardCaptionnVariants({ intent, className })
        )}
      >
        {children}
      </span>
    );
  }
);

export default PricingCardCaption;
