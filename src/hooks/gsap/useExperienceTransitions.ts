import { Experience } from "@/types";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function useExperienceTransitions(
  activeTab: string,
  places: Experience[],
  prevActiveTab?: string
) {
  return useLayoutEffect(() => {
    //hacky to just animate the left highlight border. find better solution
    const TAB_HEIGHT = 40;

    const prevTabPosition =
      (places.findIndex((p) => p?.name === prevActiveTab) + 1) * TAB_HEIGHT;
    const currentTabPosition =
      (places.findIndex((p) => p?.name === activeTab) + 1) * TAB_HEIGHT;

    gsap.from(".active-tab-border", {
      ease: "power3",
      duration: 0.5,
      y: prevTabPosition ? prevTabPosition - currentTabPosition : undefined,
    });

    if (!!prevActiveTab) {
      gsap.fromTo(
        ".active-tab-content",
        {
          ease: "power3",
          duration: 0.5,
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
    }
  }, [activeTab, prevActiveTab, places]);
}
