import { MutableRefObject } from "react";
import tw from "tailwind-styled-components";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Text from "@/components/Text";
import Button from "@/components/Button";

export default function Sidebar({
  sideBarRef,
  sidebarOpen,
  closeSidebar,
  navItems,
}: {
  sideBarRef: MutableRefObject<HTMLElement | null>;
  sidebarOpen: boolean;
  closeSidebar: () => void;
  navItems: { name: string; to: string }[];
}) {
  return (
    <SidebarCon ref={sideBarRef} $showSidebar={sidebarOpen}>
      <CloseBtn onClick={closeSidebar} />

      <NavItemCon>
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
      </NavItemCon>
    </SidebarCon>
  );
}

const SidebarCon = tw.aside<{ $showSidebar: boolean }>`
sidebar-container transition-all w-[200px] 
min-w-[200px] min-[320px]:w-[300px] 
fixed shadow-header backdrop-blur h-[100vh] 
bg-primary-200 right-0 top-0 px-[30px] py-[21px] 
flex-col z-[60] items-center bottom-0 flex md:invisible 
${({ $showSidebar }) =>
  $showSidebar
    ? "visible translate-x-[0vw] duration-500"
    : "invisbile translate-x-[100vw] duration-300"}`;

const CloseBtn = tw(XCircleIcon)`
h-8 w-8 self-end stroke-primary-700
`;

const NavItemCon = tw.div`
flex-1 flex flex-col gap-[60px] mt-[50px] p-10
`;
