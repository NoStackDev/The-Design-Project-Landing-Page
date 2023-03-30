import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardDividerVariants = cva(
  "w-10/12 h-0.5 group-hover:bg-white-100",
  {
    variants: {
      intent: {
        default: ["bg-primary-400"],
        active: ["bg-white-100"],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface PricingCardDividerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardDividerVariants> {}

const PricingCardDivider = forwardRef<HTMLDivElement, PricingCardDividerProps>(
  ({ children, intent, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={mergeClassName(
          pricingCardDividerVariants({ intent, className })
        )}
      >
        {children}
      </div>
    );
  }
);

PricingCardDivider.displayName = "PricingCardDivider";

export default PricingCardDivider;
