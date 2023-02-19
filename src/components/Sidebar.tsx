import { MutableRefObject } from "react";
import tw from "tailwind-styled-components";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Text from "@/components/Text";
import Button from "@/components/Button";

const SidebarCon = tw.aside<{ $showSidebar: boolean }>`
w-[200px] min-w-[200px] min-[320px]:w-[300px] 
fixed shadow-header backdrop-blur h-[100vh] 
bg-primary-150 right-0 top-0 
translate-x-0 duration-75 px-[30px] py-[21px] 
flex-col z-[60] items-center bottom-0 flex md:hidden
${({ $showSidebar }) => ($showSidebar ? "flex" : "hidden")}`;

export default function Sidebar({
  ref,
  sidebarOpen,
  closeSidebar,
  navItems,
}: {
  ref: MutableRefObject<HTMLElement | null>;
  sidebarOpen: boolean;
  closeSidebar: () => void;
  navItems: { name: string; to: string }[];
}) {
  return (
    <SidebarCon ref={ref} $showSidebar={sidebarOpen}>
      <XCircleIcon
        onClick={closeSidebar}
        className="h-8 w-8 self-end stroke-primary-700"
      />

      <div className="flex-1 flex flex-col gap-[60px] mt-[50px] p-10">
        {navItems.map((item, idx) => (
          <a
            className="flex flex-col items-center"
            href={item.to}
            onClick={closeSidebar}
            key={idx}
          >
            <Text variant="p1" color="pri-700">
              0{idx + 1}.
            </Text>
            <Text
              variant="p1"
              color="white"
              className="hover:text-primary-700 "
            >
              {item.name}
            </Text>
          </a>
        ))}

        <Button>Resume</Button>
      </div>
    </SidebarCon>
  );
}
