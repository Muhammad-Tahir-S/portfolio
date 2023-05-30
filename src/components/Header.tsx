import { Dispatch, SetStateAction, useCallback } from "react";
import tw from "tailwind-styled-components";
import clsx from "clsx";

import Text from "@/components/Text";
import Button from "@/components/Button";
import Sidebar from "./Sidebar";

import useScrollDirection from "@/hooks/useScrollDirection";
import useScrollPosition from "@/hooks/useScrollPosition";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "@/assets/icons/logo.svg";

import { gsap } from "gsap";
import Resume from "@/utils/my-resume.pdf";

const HEADER_HEIGHT = 74;

export default function LayoutHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const scrollDirection = useScrollDirection();
  const { scrollY } = useScrollPosition();

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  function openSidebar() {
    setSidebarOpen(true);
    gsap.from(".close-menu-btn", {
      x: 60,
      ease: "elastic",
      duration: 2,
      stagger: 0.2,
    });
  }

  return (
    <>
      <Header
        className={clsx(
          scrollDirection === "down" ? `-top-[74px]` : "top-0",
          //74 in -top-[74px] above is same value as HEADER_HEIGHT,
          //adjust both accordingly or refactor
          scrollY > HEADER_HEIGHT && scrollDirection === "up"
            ? "shadow-header backdrop-blur-[6px]"
            : ""
        )}
      >
        <Nav>
          <a href="/" className="h-fit nav-logo">
            <LogoSvg />
          </a>

          <NavItemCon>
            {navItems.map((item, idx) => (
              <a href={item.to} key={idx} className="nav-item">
                <Text
                  variant="p1"
                  color="pri-700"
                  className="hover:text-secondary-100"
                >
                  <NumberSpan>0{idx + 1}.</NumberSpan>
                  {item.name}
                </Text>
              </a>
            ))}

            <a href={Resume} rel="noopener noreferrer" target="_blank">
              <Button className="nav-resume-btn">Resume</Button>
            </a>
          </NavItemCon>

          <MenuBtn onClick={openSidebar} />
        </Nav>
      </Header>

      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        navItems={navItems}
      />
    </>
  );
}

const navItems = [
  {
    name: "About",
    to: "#about",
  },
  {
    name: "Experience",
    to: "#experience",
  },
  {
    name: "Work",
    to: "#work",
  },
  {
    name: "Contact",
    to: "#contact",
  },
];

const Header = tw.header`
fixed z-50 flex w-full h-[74px]
transition-all duration-200 
`;

const Nav = tw.nav`
flex flex-1 justify-between 
py-4 px-[30px] md:px-[60px] 
transition-padding ease-in duration-100
h-fit items-center relative`;

const NavItemCon = tw.div`
bg-bg h-fit md:flex hidden
gap-4 items-center`;

const NumberSpan = tw.span`
mr-2 text-secondary-100`;

const LogoSvg = tw(Logo)`
stroke-secondary-100 fill-transparent 
hover:fill-primary-200 ease-in 
transition-colors duration-150`;

const MenuBtn = tw(Bars3Icon)`
h-8 w-8 open-menu-btn md:hidden static 
stroke-secondary-100
`;
