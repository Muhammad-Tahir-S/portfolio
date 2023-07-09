import { gsap } from "gsap";
import { RefObject, useLayoutEffect } from "react";

export function useHeaderTransitions(ref: RefObject<HTMLDivElement>) {
  return useLayoutEffect(() => {
    const tl = gsap.timeline();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    let ctx = gsap.context(() => {
      window.location.href === baseUrl
        ? tl.from(".center-load-logo", {
            display: "block",
            opacity: 0,
            ease: "expo",
            duration: 1.5,
          })
        : null;

      window.location.href === baseUrl
        ? tl.from(".nav-logo", {
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
          })
        : tl.from(
            ".nav-logo",
            {
              duration: 2,
              opacity: 0,
              y: -40,
              ease: "elastic",
            },
            1
          );

      window.location.href === baseUrl
        ? tl.from(
            ".open-menu-btn",
            {
              duration: 2,
              opacity: 0,
              y: -40,
              ease: "elastic",
            },
            2.5
          )
        : tl.from(
            ".open-menu-btn",
            {
              duration: 2,
              opacity: 0,
              y: -40,
              ease: "elastic",
            },
            1
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

      window.location.href === baseUrl
        ? tl.from(
            ".main",
            {
              duration: 2,
              opacity: 0,
              x: 40,
              stagger: 0.2,
              ease: "elastic",
            },
            3
          )
        : tl.from(
            ".main",
            {
              duration: 1,
              opacity: 0,
              x: 40,
              stagger: 0.2,
              ease: "elastic",
            },
            2
          );

      window.location.href === baseUrl
        ? tl.from(
            ".layout-fixed-footer-item",
            {
              duration: 2,
              opacity: 0,
              y: 40,
              stagger: 0.2,
              ease: "elastic",
            },
            3
          )
        : tl.from(
            ".layout-fixed-footer-item",
            {
              duration: 1,
              opacity: 0,
              y: 40,
              stagger: 0.2,
              ease: "elastic",
            },
            2
          );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
