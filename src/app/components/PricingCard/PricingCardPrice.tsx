import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardPriceVariant = cva(
  "font-bold text-5xl sm:text-5xl lg:text-6xl text-center",
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

interface PricingCardPriceProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pricingCardPriceVariant> {}

const PricingCardPrice = forwardRef<HTMLSpanElement, PricingCardPriceProps>(
  ({ children, intent, className, ...props }, ref) => {
    return (
      <span
        {...props}
        ref={ref}
        className={mergeClassName(
          pricingCardPriceVariant({ intent, className })
        )}
      >
        {children}
      </span>
    );
  }
);

export default PricingCardPrice;
