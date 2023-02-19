import { gsap } from "gsap";
import { RefObject, useLayoutEffect } from "react";

export function useHeaderAnimations(ref: RefObject<HTMLBodyElement>) {
  return useLayoutEffect(() => {
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.from(".center-load-logo", {
        display: "block",
        opacity: 0,
        ease: "expo",
        duration: 1.5,
      });

      tl.from(".nav-logo", {
        duration: 1.5,
        opacity: 0,
        fill: "#39005F",
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        xPercent: -50,
        yPercent: -50,
        stagger: 0.2,
        ease: "expo",
        force3D: true,
      });

      tl.from(
        ".open-menu-btn",
        {
          duration: 2,
          opacity: 0,
          y: -40,
          ease: "elastic",
        },
        2.5
      );

      tl.from(
        ".nav-item",
        {
          duration: 2,
          opacity: 0,
          y: -30,
          stagger: 0.2,
          ease: "elastic",
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
        },
        3
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
