import clsx from "clsx";
import { twMerge } from "tailwind-merge";

//
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//getting the day name from date string
export const dayFormat = (dateSting) => {
  const date = new Date(dateSting);
  return date.getDay(); //returns index
};

//calculate sum
export const sumOfItems = (arr, item) => {
  return arr.reduce((accu, curr) => accu + curr[item], 0);
};
