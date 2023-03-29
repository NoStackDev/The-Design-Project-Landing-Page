import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardListHeaderVariants = cva("font-bold text-left group-hover:text-white-100", {
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

interface PricingCardListHeaderProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pricingCardListHeaderVariants> {}

const PricingCardListHeader = forwardRef<
  HTMLSpanElement,
  PricingCardListHeaderProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={mergeClassName(
        pricingCardListHeaderVariants({ intent, className })
      )}
    >{children}</span>
  );
});

export default PricingCardListHeader;
