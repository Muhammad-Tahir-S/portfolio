import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";

import { XCircleIcon } from "@heroicons/react/24/outline";

import Text from "@/components/Text";
import Button from "@/components/Button";
import useOutsideClicked from "@/hooks/useOutsideClicked";
import Resume from "@/utils/my-resume.pdf";

import { gsap } from "gsap";

type ISidebar = {
  sidebarOpen: boolean;
  closeSidebar: () => void;
  navItems: { name: string; to: string }[];
};

export default function Sidebar({
  sidebarOpen,
  closeSidebar,
  navItems,
}: ISidebar) {
  const sidebarRef = useRef(null);

  const clickedOutsideSidebar = useOutsideClicked(sidebarRef, sidebarOpen);

  useEffect(() => {
    clickedOutsideSidebar ? closeSidebar() : null;
  }, [clickedOutsideSidebar, closeSidebar]);

  function onCloseBtnClick() {
    closeSidebar();
    gsap.from(".open-menu-btn", {
      y: 40,
      ease: "elastic",
      duration: 2.5,
      stagger: 0.2,
    });
  }

  return (
    <SidebarCon ref={sidebarRef} $showSidebar={sidebarOpen}>
      <CloseBtn onClick={onCloseBtnClick} />

      <NavItemCon>
        {navItems.map((item, idx) => (
          <a
            className="flex flex-col items-center"
            href={item.to}
            onClick={closeSidebar}
            key={idx}
          >
            <Text variant="p1" color="sec-100">
              0{idx + 1}.
            </Text>
            <Text
              variant="p1"
              color="pri-700"
              className="hover:text-primary-700 "
            >
              {item.name}
            </Text>
          </a>
        ))}

        <a href={Resume} rel="noopener noreferrer" target="_blank">
          <Button>Resume</Button>
        </a>
      </NavItemCon>
    </SidebarCon>
  );
}

const SidebarCon = tw.aside<{ $showSidebar: boolean }>`
sidebar-container transition-all w-[200px] 
min-w-[200px] min-[320px]:w-[300px] 
fixed shadow-header backdrop-blur h-full 
bg-primary-150 right-0 top-0 px-[30px] py-[21px] 
flex-col z-[60] items-center bottom-0 flex md:hidden 
${({ $showSidebar }) =>
  $showSidebar
    ? "visible translate-x-[0vw] duration-500"
    : "invisbile  translate-x-[100vw] duration-300"}
    `;

const CloseBtn = tw(XCircleIcon)`
h-8 w-8 self-end stroke-secondary-100
close-menu-btn
`;

const NavItemCon = tw.div`
flex-1 flex flex-col gap-[60px] mt-[50px] p-10
`;
