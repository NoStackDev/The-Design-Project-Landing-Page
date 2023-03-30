import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const pricingCardListItemVariants = cva(
  "text-sm text-left group-hover:text-white-100",
  {
    variants: {
      intent: {
        default: ["text-black-100"],
        active: ["text-white-100"],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

interface PriceCardListItemProps
  extends HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof pricingCardListItemVariants> {}

const PriceCardListItem = forwardRef<HTMLLIElement, PriceCardListItemProps>(
  ({ children, intent, className, ...props }, ref) => {
    return (
      <li
        {...props}
        ref={ref}
        className={mergeClassName(
          pricingCardListItemVariants({ intent, className })
        )}
      >
        {children}
      </li>
    );
  }
);

PriceCardListItem.displayName = "PriceCardListItem";

export default PriceCardListItem;
