import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClassName = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
