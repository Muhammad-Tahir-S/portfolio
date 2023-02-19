"use client";
import "./globals.css";
import React, { ReactNode, useRef, useState } from "react";
import LayoutHeader from "@/components/Header";
import Logo from "@/assets/icons/load-logo.svg";
import tw from "tailwind-styled-components";
import { useHeaderAnimations } from "@/hooks/gsap/useHeaderAnimations";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bodyRef = useRef<HTMLBodyElement>(null);

  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  useHeaderAnimations(bodyRef);

  return (
    <html lang="en">
      <head />
      <Body ref={bodyRef}>
        <LayoutHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <CenterLoadLogo />
        <ChildrenCon $sidebarOpen={sidebarOpen}>{children}</ChildrenCon>
      </Body>
    </html>
  );
}

const Body = tw.body`
bg-primary-150
`;

const CenterLoadLogo = tw(Logo)`
hidden absolute left-[calc(50%_-_21px)] 
top-[calc(50%_-_21px)] center-load-logo 
stroke-secondary-100 
fill-primary-200 ease-in
transition-colors duration-150`;

const ChildrenCon = tw.div<{ $sidebarOpen: boolean }>`
main px-[60px] sm:px-[80px] md:px-[130px] lg:px-[150px]  
bg-inherit h-full 
${({ $sidebarOpen }) =>
  $sidebarOpen
    ? "blur-sm md:blur-none transition-all md:transition-none pointer-events-none select-none"
    : ""}
`;
