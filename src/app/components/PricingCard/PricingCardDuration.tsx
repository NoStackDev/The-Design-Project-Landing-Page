import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardDurationVariants = cva(
  "font-bold text-center group-hover:text-black-100",
  {
    variants: {
      intent: {
        default: ["text-primary-400"],
        active: ["text-black-100"],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface PricingCardDurationProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pricingCardDurationVariants> {}

const PricingCardDuration = forwardRef<
  HTMLSpanElement,
  PricingCardDurationProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={mergeClassName(
        pricingCardDurationVariants({ intent, className })
      )}
    >
      {children}
    </span>
  );
});

PricingCardDuration.displayName = "PricingCardDuration";

export default PricingCardDuration;
