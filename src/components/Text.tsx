import { ReactNode } from "react";
import { clsx } from "clsx";

type TextVariant =
  | "L1"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "p1"
  | "p2"
  | "p3"
  | "p4";

type TextColor =
  | "white"
  | "black"
  | "pri-100"
  | "pri-200"
  | "pri-300"
  | "pri-400"
  | "pri-500"
  | "pri-600"
  | "pri-700"
  | "pri-800"
  | "sec-100"
  | "sec-200"
  | "sec-300"
  | "sec-400"
  | "sec-500"
  | "sec-600"
  | "sec-700"
  | "sec-800";

interface IText {
  children: ReactNode;
  variant: TextVariant;
  color: TextColor;
  className?: string;
  uppercase?: boolean;
}
export default function Text({
  children,
  variant = "p1",
  color = "white",
  className,
  uppercase,
}: IText) {
  return (
    <p
      className={clsx(
        "ease-in transition-colors duration-100",
        className,
        getVariant(variant),
        getColor(color),
        uppercase && "uppercase"
      )}
    >
      {children}
    </p>
  );
}

const getColor = (color: TextColor) => {
  switch (color) {
    case "white":
      return "text-white";
    case "black":
      return "text-black";
    case "pri-100":
      return "text-primary-100";
    case "pri-200":
      return "text-primary-200";
    case "pri-300":
      return "text-primary-300";
    case "pri-400":
      return "text-primary-400";
    case "pri-500":
      return "text-primary-500";
    case "pri-600":
      return "text-primary-600";
    case "pri-700":
      return "text-primary-700";
    case "pri-800":
      return "text-primary-800";

    case "sec-100":
      return "text-secondary-100";
    case "sec-200":
      return "text-secondary-200";
    case "sec-300":
      return "text-secondary-300";
    case "sec-400":
      return "text-secondary-400";
    case "sec-500":
      return "text-secondary-500";
    case "sec-600":
      return "text-secondary-600";
    case "sec-700":
      return "text-secondary-700";
    case "sec-800":
      return "text-secondary-800";

    default:
      break;
  }
};

const getVariant = (variant: TextVariant) => {
  switch (variant) {
    case "L1":
      return "text-[60px]";
    case "H1":
      return "text-[36px]";
    case "H2":
      return "text-[32px]";
    case "H3":
      return "text-[24px]";
    case "H4":
      return "text-[18px]";
    case "H5":
      return "text-[16px]";
    case "p1":
      return "text-[14px]";
    case "p2":
      return "text-[12px]";
    case "p3":
      return "text-[10px]";
    case "p4":
      return "text-[9px]";

    default:
      break;
  }
};
