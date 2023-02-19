import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import tw from "tailwind-styled-components";

import Text from "@/components/Text";
import Button from "@/components/Button";
import Logo from "@/assets/icons/logo.svg";

import useScrollDirection from "@/hooks/useScrollDirection";
import useScrollPosition from "@/hooks/useScrollPosition";
import useOutsideClicked from "@/hooks/useOutsideClicked";

import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

const HEADER_HEIGHT = 74;

export default function LayoutHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const sidebarRef = useRef(null);

  const clickedOutsideSidebar = useOutsideClicked(sidebarRef, sidebarOpen);
  const scrollDirection = useScrollDirection();
  const { scrollY } = useScrollPosition();

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  function openSidebar() {
    setSidebarOpen(true);
  }

  useEffect(() => {
    clickedOutsideSidebar ? closeSidebar() : null;
  }, [clickedOutsideSidebar, closeSidebar]);

  return (
    <>
      <Header
        className={clsx(
          scrollDirection === "down" ? `-top-[74px]` : "top-0",
          scrollY > HEADER_HEIGHT && scrollDirection === "up"
            ? "shadow-header backdrop-blur-sm"
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
                  color="white"
                  className="hover:text-primary-700"
                >
                  <NumberSpan>0{idx + 1}.</NumberSpan>
                  {item.name}
                </Text>
              </a>
            ))}

            <Button className="nav-resume-btn">Resume</Button>
          </NavItemCon>

          <MenuBtn onClick={openSidebar} />
        </Nav>
      </Header>

      <Sidebar
        sidebarRef={sidebarRef}
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
mr-2 text-primary-700`;

const LogoSvg = tw(Logo)`
stroke-primary-700 fill-transparent 
hover:fill-primary-200 ease-in 
transition-colors duration-150`;

const MenuBtn = tw(Bars3Icon)`
h-8 w-8 nav-menu-btn md:hidden static 
stroke-primary-700
`;
