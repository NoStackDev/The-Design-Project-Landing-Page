import { mergeClassName } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const pricingCardHeaderVariants = cva(
  "font-bold text-3xl text-center group-hover:text-white-100",
  {
    variants: {
      intent: {
        default: ["text-primary-100"],
        active: ["text-white-100"],
      },
    },
  }
);

interface PricingCardHeaderProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pricingCardHeaderVariants> {}

const PricingCardHeader = forwardRef<
  HTMLHeadingElement,
  PricingCardHeaderProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={mergeClassName(
        pricingCardHeaderVariants({ intent, className })
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

PricingCardHeader.displayName = "PricingCardHeader";

export default PricingCardHeader;
