import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const testimonialsButtonVariant = cva(
  "bg-transparent rounded-full p-2 border-0",
  {
    variants: {
      intent: {
        left: [""],
        right: ["rotate-180"],
      },
    },
    defaultVariants: {
      intent: "left",
    },
  }
);

interface TestimonialsButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof testimonialsButtonVariant> {}

const TestimonialsButton = forwardRef<
  HTMLButtonElement,
  TestimonialsButtonProps
>(({ children, intent, className, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={mergeClassName(
        testimonialsButtonVariant({ intent, className })
      )}
    >
      {children}
    </button>
  );
});

TestimonialsButton.displayName = "TestimonialsButton";

export default TestimonialsButton;
