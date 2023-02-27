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
    <div className="relative">
      <div className="w-fit flex flex-col gap-2 before:absolute before:h-full before:left-[0.5px] before:z-10 before:w-[1px] before:bg-gray-100 before:shadow-lg ">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={` w-full h-[40px] flex items-center justify-start py-2  hover:bg-primary-250 ml-[0.5px] relative px-6 transition-colors duration-200 ease-in `}
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
