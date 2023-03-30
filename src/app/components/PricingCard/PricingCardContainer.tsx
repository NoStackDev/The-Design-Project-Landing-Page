import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardContainerVariants = cva("w-full flex flex-col gap-3", {
  variants: {
    intent: {
      default: [""],
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

interface PricingCardContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardContainerVariants> {}

const PricingCardContainer = forwardRef<
  HTMLDivElement,
  PricingCardContainerProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={mergeClassName(
        pricingCardContainerVariants({ intent, className })
      )}
    >
      {children}
    </div>
  );
});

PricingCardContainer.displayName = "PricingCardContainer";

export default PricingCardContainer;
