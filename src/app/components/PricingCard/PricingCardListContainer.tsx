import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardListContainerVariants = cva(
  "w-full flex flex-col gap-3 px-6",
  {
    variants: {
      intent: {
        default: [""],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface PricingCardContainerProps
  extends HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof pricingCardListContainerVariants> {}

const PricingCardListContainer = forwardRef<
  HTMLOListElement,
  PricingCardContainerProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <ol
      ref={ref}
      {...props}
      className={mergeClassName(
        pricingCardListContainerVariants({ intent, className })
      )}
    >
      {children}
    </ol>
  );
});

PricingCardListContainer.displayName = "PricingCardListContainer";

export default PricingCardListContainer;
