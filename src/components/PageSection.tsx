import useWindowDimensions from "@/hooks/useWindowDimension";
import clsx from "clsx";
import { ReactNode } from "react";
import Text from "./Text";

type PageSection = {
  children: ReactNode;
  number: string;
  title: string;
  className?: string;
  leftOffset?: boolean;
  leftBackground?: boolean;
};

export default function PageSection({
  children,
  number,
  title,
  leftOffset,
  className,
  leftBackground,
}: PageSection) {
  const vw = useWindowDimensions();
  const experienceSectionEl = document.querySelector("#experience");
  const leftBackgroundWidth =
    experienceSectionEl && vw.width > 1279
      ? vw.width * 0.6 - 150 - (vw.width - 300) * 0.15
      : experienceSectionEl && vw.width > 1023
      ? vw.width * 0.6 - 150 - (vw.width - 300) * 0.1
      : experienceSectionEl && vw.width > 767
      ? vw.width * 0.6 - 100
      : 0;

  return (
    <div
      className={clsx(
        "flex flex-col w-full ",
        { "lg:mx-auto lg:w-[80%] xl:w-[70%]": leftOffset },
        className
      )}
    >
      {leftBackground && (
        <div
          style={{
            width: leftBackgroundWidth,
          }}
          className="hidden md:block absolute h-full bg-primary-100 left-0 top-0 z-0  rounded-l-md"
        ></div>
      )}
      <div className="relative w-fit z-10">
        <Text
          variant="H3"
          color="pri-700"
          className="after:absolute after:h-[1px] after:bg-primary-600 after:w-[calc(100%_+_36px)] sm:after:w-[250px] after:left-0 after:sm:left-[100%] sm:after:ml-[30px] after:top-[calc(100%_+_8px)] sm:after:top-[50%] after:transition-all ease-in font-medium capitalize"
        >
          <span className="text-secondary-100 text-[18px] mr-2">{number}</span>
          {title}
        </Text>
      </div>
      <div className="mt-10 h-full flex-1 z-10">{children}</div>
    </div>
  );
}
