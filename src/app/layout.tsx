"use client";
import "./globals.css";
import React, { ReactNode, useLayoutEffect, useRef } from "react";
import LayoutHeader from "@/components/Header";
import { gsap } from "gsap";
import Logo from "@/assets/icons/load-logo.svg";
import tw from "tailwind-styled-components";

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyRef = useRef<HTMLBodyElement>(null);

  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  useLayoutEffect(() => {
    const tl = gsap.timeline({});

    let ctx = gsap.context(() => {
      tl.from(".center-load-logo", {
        display: "block",
        drawSVG: "0%",
        opacity: 0,
        ease: "expo",
        duration: 1.5,
      });

      // gsap.fromTo(
      //   "#load-circle",
      //   {
      //     drawSVG: "0%",
      //     delay: 0.1,
      //   },
      //   {
      //     drawSVG: "100%",
      //     duration: 1,
      //   }
      // );
      //drawSvg animation not working

      tl.from(
        ".nav-logo",
        {
          duration: 1.5,
          opacity: 0,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          xPercent: -50,
          yPercent: -50,
          stagger: 0.2,
          ease: "expo",
          force3D: true,
        },
        1.5
      );

      tl.from(
        ".nav-item",
        {
          duration: 2,
          opacity: 0,
          y: -30,
          stagger: 0.2,
          ease: "elastic",
          force3D: true,
        },
        2.5
      );

      tl.from(
        ".nav-resume-btn",
        {
          duration: 2,
          opacity: 0,
          x: 40,
          stagger: 0.2,
          ease: "elastic",
          force3D: true,
        },
        2.5
      );

      tl.from(
        ".main",
        {
          duration: 2,
          opacity: 0,
          x: 40,
          stagger: 0.2,
          ease: "elastic",
          force3D: true,
        },
        3
      );
    }, bodyRef);

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <html lang="en">
      <head />
      <body ref={bodyRef} className="bg-primary-150 overflow-y-scroll">
        <LayoutHeader />
        <LogoSvg />
        <div className="main px-[150px] bg-inherit">{children}</div>
      </body>
    </html>
  );
}

const LogoSvg = tw(Logo)`
hidden absolute left-[calc(50%_-_21px)] 
top-[calc(50%_-_21px)] center-load-logo 
stroke-primary-700 fill-transparent 
hover:fill-primary-200 ease-in 
transition-colors duration-150`;
