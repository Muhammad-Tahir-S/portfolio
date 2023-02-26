import { ReactNode } from "react";
import Text from "./Text";

type PageSection = { children: ReactNode; number: string; title: string };

export default function PageSection({ children, number, title }: PageSection) {
  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="relative w-fit">
        <Text
          variant="H2"
          color="pri-700"
          className="after:absolute after:h-[1px] after:bg-primary-600 after:w-[calc(100%_+_36px)] sm:after:w-[280px] after:left-0 after:sm:left-[100%] sm:after:ml-[30px] after:top-[calc(100%_+_8px)] sm:after:top-[50%] after:transition-all ease-in"
        >
          <span className="text-secondary-100 text-[18px] mr-2">{number}</span>
          {title}
        </Text>
      </div>
      <div className="mt-10 h-full flex-1">{children}</div>
    </div>
  );
}
