import { mergeClassName } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, forwardRef } from "react";

const buttonVariants = cva("", {
  variants: {
    intent: {
      primary: ["rounded-lg", "bg-primary-300", "text-white-100"],
      linear: [
        "rounded-lg",
        "bg-image-gradient-75deg from-primary-300/75 to-primary-300/90",
        "text-sm sm:text-lg lg:text-xl text-white-100",
        "backdrop-blur",
      ],
      outline: ["bg-transparent", "border-1", "w-full"],
      "outline-right-unrounded": [
        "bg-transparent",
        "border-1",
        "w-full",
        "rounded-l-lg",
      ],
      "outline-left-unrounded": [
        "bg-transparent",
        "border-1",
        "w-full",
        "rounded-r-lg",
      ],
      "outline-unrounded": [
        "bg-transparent",
        "border-1",
        "w-full",
      ],
      "price-card": [
        "bg-transparent",
        "border-1",
        "w-full",
        "py-2",
        "font-bold",
        "rounded-lg text-primary-400 border-primary-400",
        "text-base md:text-2xl lg:text-3xl",
      ],
      "price-card-active": [
        "bg-primary-400",
        "border-1",
        "text-white-100",
        "py-2",
        "w-full",
        "font-bold",
        "rounded-lg border-white-100",
        "text-base md:text-2xl lg:text-3xl",
      ],
    },
    active: {
      priceCardDuration: [
        "bg-black-100",
        "text-white-100",
        "!border-black-100",
      ],
      inactive: [""],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, intent, active, className, ...props }, ref) => {
    return (
      <button
        {...props}
        className={mergeClassName(
          buttonVariants({ intent, active, className })
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
