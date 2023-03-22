import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";
import { mergeClassName } from "../../lib/utils";

const pricingCardVariants = cva(
  "border-2 rounded-lg flex flex-col items-center py-10 px-10 border-primary-400 flex flex-col gap-12",
  {
    variants: {
      intent: {
        default: ["bg-transparent"],
        active: ["bg-primary-400"],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface PricingCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {}

const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  ({ children, intent, className, ...props }, ref) => {
    return (
      <div
        className={mergeClassName(pricingCardVariants({ intent, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default PricingCard;
