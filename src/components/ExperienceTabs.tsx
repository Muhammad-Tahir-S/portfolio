import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import Text from "./Text";

type ExperienceTabs = {
  items: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};
export default function ExperienceTabs({
  items,
  activeTab,
  setActiveTab,
}: ExperienceTabs) {
  return (
    <div className="relative h-fit">
      <div
        className={
          "md:w-fit flex md:flex-col mb-5 md:mb-0 px-10 md:pb-0 ml-[-40px] md:ml-0 md:px-0 overflow-x-scroll md:overflow-x-hidden w-[calc(100%_+_100px)] overflow-y-hidden gap-2 before:absolute before:h-full before:left-[0.5px] before:z-10 before:w-[1px] md:before:bg-gray-100 before:shadow-lg experience-tabs"
        }
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={clsx(
              "w-fit md:w-full h-[40px] flex items-center justify-start py-2  hover:bg-primary-250 ml-[0.5px] relative px-6 transition-colors duration-200 ease-in whitespace-nowrap",
              {
                "bg-primary-250 transition-colors": item === activeTab,
              }
            )}
          >
            <Text
              variant="p1"
              color={item === activeTab ? "sec-100" : "gray-200"}
              className="experience-tab-text"
            >
              {item}
            </Text>
            {item === activeTab && (
              <div className="active-tab-border absolute top-0 left-[-0.5px] w-[2px] bg-secondary-100 rounded z-10 h-[40px]"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
