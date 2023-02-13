"use client";
import "./globals.css";
import { LegacyRef, ReactNode, useLayoutEffect, useRef } from "react";
import LayoutHeader from "@/components/Header";
import { gsap } from "gsap";
import Logo from "@/assets/icons/load-logo.svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyRef = useRef<HTMLBodyElement>(null); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.from(".center-load-logo", {
        display: "block",
        drawSVG: "0%",
        opacity: 0,
        ease: "expo",
        duration: 2,
        delay: 0,
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

      gsap.from(".nav-logo", {
        duration: 1.5,
        opacity: 0,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        xPercent: -50,
        yPercent: -50,
        delay: 2.0,
        stagger: 0.2,
        ease: "expo",
        force3D: true,
      });
      gsap.from(".nav-item", {
        duration: 2,
        opacity: 0,
        y: -30,
        delay: 2.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true,
      });
      gsap.from(".nav-resume-btn", {
        duration: 2,
        opacity: 0,
        x: 40,
        delay: 2.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true,
      });
      gsap.from(".main", {
        duration: 2,
        opacity: 0,
        x: 40,
        delay: 2.5,
        stagger: 0.2,
        ease: "elastic",
        force3D: true,
      });
      // or we can use refs
    }, bodyRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  return (
    <html lang="en">
      <head />
      <body ref={bodyRef} className="bg-primary-150 overflow-y-scroll">
        <LayoutHeader />
        <Logo
          className="hidden absolute left-[calc(50%_-_21px)] top-[calc(50%_-_21px)] center-load-logo stroke-primary-700 fill-transparent 
hover:fill-primary-200 ease-in 
transition-colors duration-150"
        />
        <div className="main px-[150px] bg-inherit">{children}</div>
      </body>
    </html>
  );
}
